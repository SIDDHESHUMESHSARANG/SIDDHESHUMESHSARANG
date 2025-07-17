import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

export function Projects({ title, description, link, repository, image, notDeployed, badges = [] }) {
  return (
    <article id="projects"
      style={{
        margin: "40px",
        borderRadius: "20px",
        height: "340px",
        width: "100%",
        maxWidth: "400px",
        padding: "24px",
        border: "2px solid var(--project-border)",
        color: "var(--project-text)",
        background: "var(--project-bg)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer"
      }}
    >
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "16px"
          }}
        />
      )}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h2 style={{ margin: "0 0 8px 10px", textAlign: "left", fontWeight: "500" }}>{title}</h2>
        <p style={{ margin: "0 0 8px 10px", fontSize: "1rem", opacity: 0.50, textAlign: "left" }}>{description}</p>
        {badges.length > 0 && (
          <div style={{ margin: "0 0 8px 10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {badges.map((src, idx) => (
              <img key={idx} src={src} alt="badge" style={{ height: "22px" }} />
            ))}
          </div>
        )}
      </div>
      <footer
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "24px",
          justifyContent: "center"
        }}
      >
        {notDeployed ? (
          <span
            title="not deployed yet"
            style={{
              color: "#888",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              cursor: "not-allowed",
              userSelect: "none"
            }}
          >
            Visit <FaExternalLinkAlt />
          </span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} project`}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
            onMouseOver={e => { e.currentTarget.style.textDecoration = "underline"; }}
            onMouseOut={e => { e.currentTarget.style.textDecoration = "none"; }}
          >
            Visit <FaExternalLinkAlt />
          </a>
        )}
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} codebase on GitHub`}
          onMouseOver={e => { e.currentTarget.style.textDecoration = "underline" }}
          onMouseOut={e => { e.currentTarget.style.textDecoration = "none" }}
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          Repository <RiGitRepositoryCommitsLine />
        </a>
      </footer>
    </article>
  );
}