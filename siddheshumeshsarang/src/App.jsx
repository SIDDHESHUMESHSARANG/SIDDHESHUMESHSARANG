import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";
import { Slider } from "./components/project-slider/Slider";
import { ScrollFadeIn } from "./components/ScrollFadeIn/ScrollFadeIn";
import "./App.css"

export default function App() {
    return (
        <>
                <Header />
            <section id="home">
                <Body />
            </section>
            
            <ScrollFadeIn threshold={0.3} delay={200}>
                <section id="projects" style={{marginLeft: "50px"}}>
                    <h2 id="creations" style={{marginLeft: "640px"}}>Creations</h2>
                    <Slider />
                </section>
            </ScrollFadeIn>
        </>
    )
}