import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-12">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Check out my latest work</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
                            I&apos;ve worked on a variety of projects, from simple
                            websites to complex web applications. Here are a few of my
                            favorites.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-10">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                        {DATA.projects.slice(0, 4).map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                                className="h-full"
                            >
                                <ProjectCard
                                    href="/projects"
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={"video" in project ? (project as any).video : ""}
                                    links={"links" in project ? (project as any).links : []}
                                />
                            </BlurFade>
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-center pt-2">
                        <Link href="/projects">
                            <Button 
                                variant="outline" 
                                className="rounded-xl h-11 px-8 font-semibold shadow-xs hover:shadow-md transition-all group border-primary/20 hover:border-primary/50"
                            >
                                Show More Projects
                                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper function to parse project date strings for sorting
function parseProjectDate(dateString: string): Date {
    if (!dateString) return new Date(0);
    
    // Handle "Present"
    if (dateString.toLowerCase().includes("present")) {
        return new Date();
    }

    // Split by common separators: "-", "–" (en dash), "—" (em dash)
    const parts = dateString.split(/[-–—]/);
    
    // Take the end date if it's a range, otherwise take the whole string
    const lastPart = (parts.length > 1 ? parts[parts.length - 1] : parts[0]).trim();
    
    const date = new Date(lastPart);
    
    if (isNaN(date.getTime())) {
        // Fallback for year-only formats like "2024"
        const yearMatch = lastPart.match(/\d{4}/);
        if (yearMatch) {
            return new Date(parseInt(yearMatch[0]), 0, 1);
        }
        return new Date(0);
    }
    
    return date;
}

