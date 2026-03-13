import React from "react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const { title, description, githubLink, liveLink, tags, tech } = project;

  return (
    <article className="card rounded-3xl border border-primary/20 bg-base-300 shadow-2xl h-full flex flex-col">
      <div className="card-body p-5 md:p-6 flex flex-col gap-4">
        <header className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              {title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-base-content/70">
              {description}
            </p>
          </div>
          {tech && (
            <span className="badge badge-info badge-outline rounded-full whitespace-nowrap">
              {tech}
            </span>
          )}
        </header>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-ghost rounded-full text-xs md:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm md:btn-md btn-outline rounded-2xl"
            >
              GitHub
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm md:btn-md btn-primary rounded-2xl"
            >
              Live Link
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

