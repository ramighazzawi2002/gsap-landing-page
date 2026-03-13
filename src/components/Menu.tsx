import {allDrinks} from "../constants";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const totalDrinks = allDrinks.length;
    const goToSlide = (index: number) => {
        const newIndex = (index + totalDrinks) % totalDrinks
        setCurrentIndex(newIndex)
    }

    const getDrinkAt = (indexOffset: number) => {
        return allDrinks[(currentIndex + indexOffset + totalDrinks) % totalDrinks]
    }

    const currentDrink = getDrinkAt(0);
    const prevDrink = getDrinkAt(-1);
    const nextDrink = getDrinkAt(1);
    const contentRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo("#title", {opacity: 0}, {opacity: 1, duration: 1})
        gsap.fromTo(".cocktail img", {opacity: 0, xPercent: -100}, {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            ease: "power1.inOut"
        })
        gsap.fromTo(".details h2", {yPercent: 100, opacity: 0}, {
            yPercent: 0,
            opacity: 1,
            ease: "power1.inOut"
        })
        gsap.fromTo(".details p", {yPercent: 100, opacity: 0}, {
            yPercent: 0,
            opacity: 1,
            ease: "power1.inOut"
        })
    }, [currentIndex])
    return (
        <section id={"menu"} aria-labelledby={"menu"}>
            <img src={"/images/slider-left-leaf.png"} alt={"left-leaf"} id={"m-left-leaf"}/>
            <img src={"/images/slider-right-leaf.png"} alt={"right-leaf"} id={"m-right-leaf"}/>
            <h2 id={"menu-heading"} className={"sr-only"}>
                Drink Menu
            </h2>
            <nav className={"cocktail-tabs"} aria-labelled={"drink-navigation"}>
                {allDrinks.map((drink, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <button key={drink.id}
                                className={`${isActive ? "text-white border-white" : "tet-white/50 border-white/50 "}`}
                                onClick={() => goToSlide(index)}
                        >
                            {drink.name}
                        </button>
                    )
                })}
            </nav>
            <div className={"content"}>
                <div className={"arrows"}>
                    <button className={"text-left"} onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevDrink.name}</span>
                        <img src={"/images/right-arrow.png"} alt={"right-arrow"} aria-hidden={true}/>
                    </button>
                    <button className={"text-left"} onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextDrink.name}</span>
                        <img src={"/images/left-arrow.png"} alt={"left-arrow"} aria-hidden={true}/>
                    </button>
                </div>
                <div className={"cocktail"}>
                    <img src={currentDrink.image} className={"object-contain"} alt={"drink"}/>
                </div>
                <div className="recipe">
                    <div className="info" ref={contentRef}>
                        <p>Recipe for:</p>
                        <p id={"title"}>{currentDrink.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentDrink.title}</h2>
                        <p>{currentDrink.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
