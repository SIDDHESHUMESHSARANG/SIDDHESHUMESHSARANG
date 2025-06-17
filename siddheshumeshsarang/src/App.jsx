import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";
import { Slider } from "./components/project-slider/Slider";
import { Suspense } from "react";
import "./App.css"

export default function App() {
    return (
        <>
            <Header />
            <section id="home">
                <Body />
            </section>
            <h2 id="creations" style={{marginLeft: "620px"}}>Creations</h2><br /><br />
            <section id="projects">
                <Suspense fallback="loading...">
                    <Slider />
                </Suspense>
            </section>
        </>
    )
}