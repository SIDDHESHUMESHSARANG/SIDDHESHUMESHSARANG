export function Button({buttonText, buttonIcon, link}) {
    return (
        <a 
        href={link}
        target="blank" 
        rel="noopener noreferrer">
            <button
            id="button"
            style={{
                background: "var(--project-bg)",
                width: "200px",
                padding: "20px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                border: "2px solid var(--project-border)",
                outline: "none",
                color: "var(--project-text)",
                opacity: "0",
                animation: "fade 1s ease-in-out",
                animationDelay: "1s",
                animationFillMode: "forwards"
            }}
        >{buttonIcon}{buttonText}</button>
        </a>
    )
}