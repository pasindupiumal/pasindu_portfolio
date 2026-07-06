/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function cleanDescriptionForAlt(desc: string): string {
  // Strip markdown links [Text](url) to just Text
  let cleaned = desc.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Strip other markdown characters
  cleaned = cleaned.replace(/[*_`#]/g, "");
  // Get the first sentence
  const sentenceEnd = cleaned.indexOf(".");
  if (sentenceEnd !== -1) {
    cleaned = cleaned.substring(0, sentenceEnd);
  }
  return cleaned.trim();
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-contain bg-muted"
      onError={() => setImageError(true)}
      loading="eager"
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const isClickable = href && href !== "#";
  const ImageWrapper = isClickable ? Link : "div";
  const isInternal = href?.startsWith("/");
  const wrapperProps = isClickable ? {
    href: href!,
    ...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" }),
    className: "block"
  } : {
    className: "block"
  };

  const cleanDesc = cleanDescriptionForAlt(description);
  const descriptiveAlt = cleanDesc
    ? `${title} - ${cleanDesc} by Pasindu Piumal`
    : `${title} project screenshot by Pasindu Piumal`;

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-200",
        isClickable && "hover:ring-2 cursor-pointer hover:ring-muted",
        className
      )}
    >
      <div className="relative shrink-0">
        <ImageWrapper {...wrapperProps as any}>
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
              title={`${title} - Video demonstration by Pasindu Piumal`}
              aria-label={`${title} - Video demonstration by Pasindu Piumal`}
            />
          ) : image ? (
            <ProjectImage src={image} alt={descriptiveAlt} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </ImageWrapper>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {isClickable && (
            <Link
              href={href!}
              {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
