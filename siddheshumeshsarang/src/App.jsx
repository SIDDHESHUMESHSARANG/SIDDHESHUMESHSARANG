import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";
import { useState } from "react";
import { useEffect } from "react";

import "./App.css"

export default function App() {
    const [currentYear, setCurrentYear] = useState(null);
    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
    }, []);
    return (
        <>
                <Header />
            <section id="home">
                <Body />
            </section>
            <footer style={{background: "var(--footer-bg)"}}>
               <div>
               <p id="footer-text" style={{
                padding: "20px 40px"
               }}>&copy; {currentYear} <a href="https://github.com/SIDDHESHUMESHSARANG" style={{
                color: "var(--project-text)",
                fontWeight: "400"
               }}>SIDDHESHUMESHSARANG</a>. All Rights Reserved</p>
               </div>
            </footer>
        </>
    )   
}