import { useState } from "react";
import * as VsIcons from 'react-icons/vsc';
import '../Styles/setDisplayElements.css'


const displayElements = [{img: "desktop-image-hero-1",
imgMobile: "mobile-image-hero-1",
 heading: "Discover innovative ways to decorate",
body: "We provide unmatched quality, comfort, and style for property owners across the country. \nOur experts combine form and function in bringing your vision to life. Create a room in your \nown style with our collection and make your property a reflection of you and what you love."},

{img: "desktop-image-hero-2",
imgMobile: "mobile-image-hero-2",
 heading: "We are available all across the globe",
body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. \nLocally, we're in most major cities throughout the country. Find the branch nearest you using our \nstore locator. Any questions? Don't hesitate to contact us today."},


{img: "desktop-image-hero-3",
imgMobile: "mobile-image-hero-3",
 heading: "Manufactured with the best materials",
body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology \nto ensure that every product is made as perfect and as consistent as possible. With three decades of \nexperience in this industry, we understand what customers want for their home and office."},

];

const SetDisplayElements = ( {children, width} ) =>{
const [currentDisplay, setCurrentDisplay] = useState(0)

const style = {
    backgroundImage: `${width > 375 ? `url("images/${displayElements[currentDisplay].img}.jpg")`: `url("images/${displayElements[currentDisplay].imgMobile}.jpg")`}`
}

const NextDisplay = () =>{
    if (currentDisplay < displayElements.length - 1){
        setCurrentDisplay(currentDisplay + 1)
    }
    else{
        return setCurrentDisplay(currentDisplay)
    }
}

const PrevDisplay = () =>{
    if (currentDisplay  >= 1){
        setCurrentDisplay(currentDisplay - 1)
    }
    else{
        return setCurrentDisplay(currentDisplay)
    }
}


return(
    <div className="display-container">
        <div className="header display-img" style={style}> {children} </div>
        
        <div className=" header-container">
            <div className= "display-text">
                <h1>{displayElements[currentDisplay].heading}</h1>
                <p>{displayElements[currentDisplay].body}</p>
                
                <p className="spaced-letter">SHOP NOW 
                    <span>
                    <VsIcons.VscArrowRight 
                        fontSize = "1.5em"
                        />
                    </span>
                </p>
            </div>
            <div className="display-navigation">
                    
                    <VsIcons.VscChevronLeft
                    onClick={PrevDisplay}
                    color="white"
                    fontSize = "2em"
                    textAlign = "left"
                    />
                
                    <VsIcons.VscChevronRight
                    onClick={NextDisplay}
                    color="white"
                    fontSize = "2em"
                    textAlign = "left"
                    />
                
           </div>
        
        </div>
    </div>
)
}

export default SetDisplayElements;