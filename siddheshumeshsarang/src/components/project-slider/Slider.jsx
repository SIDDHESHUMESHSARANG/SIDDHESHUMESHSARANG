import './Slider.css'
import sweeper from "../../assets/comment.webp"
import trafficBlocks from "../../assets/trafficblocks.png"
import crossword from "../../assets/crossword.png"
export function Slider() {
    return(
        <>
            <a href="https://linktr.ee/siddheshsarang?utm_source=linktree_admin_share" target="_blank" rel="noreferrer" className="slider-link">
                <div id="slider">
                    <img loading='lazy' src={sweeper} alt="" id="sweeper" />
                    <img loading='lazy' src={trafficBlocks} alt="" id="trafficblocks" />
                    <img loading='lazy' src={crossword} alt="" id="crossword" />
                </div>
            </a>
        </>
    )
}