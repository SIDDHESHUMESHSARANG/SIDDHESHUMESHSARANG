import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

export function Project({ id, title, subtitle, target, subtitleAccent, description, link, repository, image, notDeployed, badges = [] }) {
    return (
        <article id={`projects${id}`} className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            style={{
                margin: "20px",
                height: "100%",
                width: "90%",
                maxWidth: "400px",
                border: "2px dotted #404040",
                padding: "24px",
                color: "#fff",
                background: "transparent",
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
                <h2 style={{ margin: "0 0 8px 10px", textAlign: "left", fontWeight: "500", fontSize: "25px" }}>{title}</h2>
                <h6 style={{ margin: "0 0 8px 10px", textAlign: "left", fontWeight: "500", color: subtitleAccent, fontSize: "13px" }}>{subtitle}</h6>
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
                        target={target}
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
                    target={target}
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