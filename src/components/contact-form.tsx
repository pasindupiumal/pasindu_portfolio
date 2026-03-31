"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AlertCircle, Send, CheckCircle2 } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    // Real-time email validation
    useEffect(() => {
        const emailRegex = /\S+@\S+\.\S+/;
        setIsEmailValid(emailRegex.test(formData.email));
    }, [formData.email]);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!isEmailValid) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "0086af93-2f4f-4c16-bad8-c4361c6cf342", // Use env var for security
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.firstName}`,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const result = await response.json();
            
            if (result.success) {
                setIsSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                setErrors({ submit: "Something went wrong. Please try again." });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setErrors({ submit: "Failed to connect to the server." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/5 shadow-inner">
                    <CheckCircle2 className="size-10 text-primary" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-3xl font-bold tracking-tight">Message Received</h3>
                    <p className="text-muted-foreground text-lg max-w-xs mx-auto leading-relaxed">
                        Thank you for reaching out! I&apos;ll be in touch with you shortly.
                    </p>
                </div>
                <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline" 
                    className="mt-4 rounded-xl px-10 h-12 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                    Send Another
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
             <style jsx global>{`
                .PhoneInput {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--muted);
                    padding: 0 1rem;
                    border-radius: 1rem;
                    height: 3.5rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid transparent;
                    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
                }
                .PhoneInput:focus-within {
                    background: var(--background);
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px var(--primary-foreground), inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
                }
                .PhoneInputInput {
                    background: transparent !important;
                    border: none !important;
                    outline: none !important;
                    font-size: 1rem !important;
                    width: 100% !important;
                    color: hsl(var(--foreground)) !important;
                    height: 100%;
                    font-family: inherit;
                }
                .PhoneInputCountry {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                .PhoneInputCountrySelect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    z-index: 10;
                    opacity: 0;
                    cursor: pointer;
                }
                .PhoneInputCountryIcon {
                    width: 1.8rem;
                    height: 1.2rem;
                    border-radius: 4px;
                    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                }
                .PhoneInput:hover .PhoneInputCountryIcon {
                    transform: scale(1.1);
                }
                
                /* Selection text fix */
                .PhoneInputCountrySelectContainer {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                /* Text visibility fixes for the native select options */
                select.PhoneInputCountrySelect option {
                    color: #000000 !important;
                    background-color: #ffffff !important;
                    padding: 8px;
                }
                
                .dark select.PhoneInputCountrySelect option {
                    color: #ffffff !important;
                    background-color: #18181b !important;
                }
            `}</style>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">First Name <span className="text-primary">*</span></label>
                    <Input
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={cn(
                            "rounded-2xl bg-muted/30 border-transparent transition-all focus:bg-background focus:border-primary/50 h-12 px-4 shadow-inner",
                            errors.firstName && "border-destructive/50 bg-destructive/5 text-destructive"
                        )}
                    />
                    {errors.firstName && (
                        <p className="text-[10px] font-bold text-destructive flex items-center gap-1.5 ml-1 animate-in fade-in slide-in-from-top-1">
                            <AlertCircle className="size-3" /> {errors.firstName.toUpperCase()}
                        </p>
                    )}
                </div>
                <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Last Name</label>
                    <Input
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="rounded-2xl bg-muted/30 border-transparent transition-all focus:bg-background focus:border-primary/50 h-12 px-4 shadow-inner"
                    />
                </div>
            </div>

            <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1 flex justify-between">
                    <span>Email Address <span className="text-primary">*</span></span>
                </label>
                <div className="relative">
                    <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                            "rounded-2xl bg-muted/30 border-transparent transition-all focus:bg-background focus:border-primary/50 h-12 px-4 shadow-inner",
                            errors.email && "border-destructive/50 bg-destructive/5 text-destructive"
                        )}
                    />
                </div>
                {errors.email && (
                    <p className="text-[10px] font-bold text-destructive flex items-center gap-1.5 ml-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3" /> {errors.email.toUpperCase()}
                    </p>
                )}
            </div>

            <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                <div className="pb-32 -mb-32"> {/* Invisible extra space to encourage the selection menu to open downwards */}
                    <PhoneInput
                        international
                        defaultCountry="LK"
                        value={formData.phone}
                        onChange={(val) => setFormData(p => ({ ...p, phone: val || "" }))}
                        className="PhoneInput bg-muted/30 border border-transparent hover:border-border transition-all shadow-inner overflow-hidden"
                    />
                </div>
            </div>

            <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message <span className="text-primary">*</span></label>
                <Textarea
                    name="message"
                    placeholder="Describe your vision or ask anything..."
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                        "rounded-2xl bg-muted/30 border-transparent transition-all focus:bg-background focus:border-primary/50 min-h-[160px] resize-none p-4 shadow-inner",
                        errors.message && "border-destructive/50 bg-destructive/5 text-destructive font-mono"
                    )}
                />
                {errors.message && (
                    <p className="text-[10px] font-bold text-destructive flex items-center gap-1.5 ml-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3" /> {errors.message.toUpperCase()}
                    </p>
                )}
            </div>

            {errors.submit && (
                 <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="size-5" />
                    {errors.submit.toUpperCase()}
                 </div>
            )}

            <Button
                type="submit"
                className="w-full h-14 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] group"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        SEND MESSAGE
                        <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                )}
            </Button>
        </form>
    );
}
