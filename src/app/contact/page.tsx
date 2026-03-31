import BlurFade from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { DATA } from "@/data/resume";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30">
                <FlickeringGrid 
                    squareSize={4}
                    gridGap={6}
                    color="#6b7280"
                    maxOpacity={0.5}
                    flickerChance={0.1}
                    className="size-full"
                />
            </div>
            
            {/* Ambient gradients */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl">
                <header className="space-y-6 text-center mb-16">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-emerald-500/10 backdrop-blur-sm shadow-sm mb-4 border-emerald-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Available for work</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Get In Touch
                        </h1>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            Have a project in mind or just want to say hello? I&apos;m always open to new opportunities and creative collaborations.
                        </p>
                    </BlurFade>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left side info */}
                    <div className="lg:col-span-5 space-y-12">
                        <BlurFade delay={BLUR_FADE_DELAY * 3}>
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                                    <p className="text-muted-foreground">Reach out via any of these channels.</p>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { icon: Mail, label: "Email", value: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
                                        { icon: Phone, label: "Call Me", value: DATA.contact.tel, href: `tel:${DATA.contact.tel}` },
                                        { icon: MapPin, label: "Location", value: DATA.location, href: DATA.locationLink },
                                    ].map((info, idx) => (
                                        <div key={idx} className="group relative">
                                            <a 
                                                href={info.href} 
                                                target={info.icon === MapPin ? "_blank" : undefined}
                                                rel="noreferrer"
                                                className="flex items-center gap-6 p-4 rounded-2xl border bg-background/40 backdrop-blur-xl transition-all duration-300 hover:bg-muted/50 hover:translate-x-1"
                                            >
                                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                    <info.icon size={22} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{info.label}</p>
                                                    <p className="font-semibold text-base break-words truncate">{info.value}</p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4 pt-6">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Follow my work</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {Object.entries(DATA.contact.social)
                                    .filter(([name, social]) => social.navbar && name !== "Gmail")
                                    .map(([name, social], idx) => (
                                            <a 
                                                key={idx} 
                                                href={social.url} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="size-11 flex items-center justify-center border bg-background/50 rounded-xl transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-95"
                                                aria-label={name}
                                            >
                                                <social.icon className="size-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    </div>

                    {/* Right side form */}
                    <div className="lg:col-span-7">
                        <BlurFade delay={BLUR_FADE_DELAY * 4}>
                            <div className="group relative">
                                {/* Border glow effect */}
                                <div className="absolute -inset-0.5 bg-linear-to-r from-primary via-primary/50 to-primary rounded-[2rem] blur opacity-20 transition duration-1000 group-hover:opacity-40 group-hover:duration-200" />
                                
                                <div className="relative p-1 rounded-[2rem] bg-linear-to-br from-border/50 to-border/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
                                    <div className="rounded-[1.9rem] bg-background dark:bg-zinc-950 p-8 sm:p-12 border shadow-sm">
                                        <div className="mb-10 space-y-2">
                                            <div className="flex items-center gap-3 text-primary mb-2">
                                                <Send size={18} className="animate-pulse" />
                                                <span className="text-xs font-bold uppercase tracking-widest">Send me a message</span>
                                            </div>
                                            <h3 className="text-3xl font-bold tracking-tight">I&apos;ll get back to you shortly.</h3>
                                        </div>
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </main>
    );
}
