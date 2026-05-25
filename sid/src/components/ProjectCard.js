import React from "react";
import Link from "next/link";

const ProjectCard = ({ project, openId, onToggle, projectId }) => {
  if (!project) return null;

  const isOpen = openId === projectId;
  const { title, description, githubLink, liveLink, tags, tech } = project;

  // Desktop view - Glass card
  const DesktopView = () => (
    <article className="glass-card rounded-3xl border border-white/10 shadow-2xl h-full flex flex-col">
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
            <span className="badge rounded-full whitespace-nowrap">
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
              className="btn btn-sm md:btn-md btn-primary rounded-2xl"
            >
              GitHub Repository
            </Link>
          )}
          {liveLink != "NA" && (
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

  // Mobile view - Accordion
  const MobileView = () => (
    <div className="collapse collapse-arrow glass-card rounded-2xl border border-white/10 bg-base-100/50">
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => onToggle(isOpen ? null : projectId)}
      />
      <div className="collapse-title font-semibold text-base">
        <div className="flex items-center justify-between gap-2">
          <span>{title}</span>
          {tech && (
            <span className="text-primary rounded-full whitespace-nowrap">
              {tech}
            </span>
          )}
        </div>
      </div>
      <div className="collapse-content flex flex-col gap-4 transition-all duration-500 ease-in-out">
        <p className="text-sm text-base-content/70">{description}</p>

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
              className="btn btn-sm md:btn-md btn-primary rounded-2xl"
            >
              GitHub Repository
            </Link>
          )}
          {liveLink != "NA" && (
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
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopView />
      </div>
      <div className="md:hidden">
        <MobileView />
      </div>
    </>
  );
};

export default ProjectCard;
