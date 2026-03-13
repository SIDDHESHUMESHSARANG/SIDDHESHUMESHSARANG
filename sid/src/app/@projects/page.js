"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl =
          typeof window !== "undefined" ? window.location.origin : "";
        const res = await fetch(`${baseUrl}/api/projects`);
        if (!res.ok) {
          console.error("Projects API error status:", res.status);
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        console.log("Projects API response:", data);
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error loading projects:", err);
        setError("Could not load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="page px-4 md:px-6 pb-20 pt-10 md:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:gap-8">
          <header className="flex flex-col gap-4 mb-2">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary/40 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="Projects avatar"
                    src="https://api.dicebear.com/9.x/thumbs/svg?seed=Projects"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Projects
                </h2>
                <p className="text-sm md:text-base text-base-content/70">
                  Things I&apos;ve built – apps, tools and experiments.
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-base-content/70 max-w-2xl">
              A selection of things I&apos;ve shipped recently — full‑stack apps,
              experiments, and side projects.
            </p>
            {loading && (
              <p className="text-sm md:text-base text-base-content/60">
                Loading projects...
              </p>
            )}
            {error && !loading && (
              <p className="text-sm md:text-base text-error">{error}</p>
            )}
          </header>

          {!loading && !error && (
            <>
              {projects.length === 0 ? (
                <p className="text-sm md:text-base text-base-content/60">
                  No projects to show yet. Check back soon!
                </p>
              ) : (
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project._id || project.id || project.title}
                      project={project}
                    />
                  ))}
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

