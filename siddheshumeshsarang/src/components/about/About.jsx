export function About() {
    return (
        <div id="about" style={{
            margin: "20px auto",
            borderRadius: "20px",
            height: "auto",
            width: "100%",
            maxWidth: "none",
            padding: "32px 48px",
            fontFamily: "Comfortaa",
            color: "var(--project-text)",
            opacity: "0",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            cursor: "pointer",
            boxSizing: "border-box",
            fontSize: "1.2rem",
            lineHeight: 1.7,
            animation: "fade 1s ease-in-out",
            animationDelay: "1s",
            animationFillMode: "forwards"
        }}>
            <p id="about-txt">Hi, I am Siddhesh Umesh Sarang. I am a passionate software developer with a strong interest in building impactful digital experiences <br />With a background in computer science and hands-on experience in web development, I enjoy solving complex problems and continuously learning new technologies. My expertise includes working with modern JavaScript frameworks, responsive design, and creating user-friendly interfaces. Outside of coding, I love exploring new ideas, collaborating with others, and contributing to open-source projects. I am always eager to take on new challenges and grow as a developer.</p>
        </div>
    )
}