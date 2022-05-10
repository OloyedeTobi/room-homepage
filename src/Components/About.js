import '../Styles/About.css'

export const About = () => {
  return(
      <>
      <div className="About-container">
        <div className="flex-1">
            <img src = "images/image-about-dark.jpg"></img>
        </div>
        <div className="flex-2">
            <div>
                <h2>About our furniture</h2>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
        </div>
        <div className="flex-1">
        <img src = "images/image-about-light.jpg"></img>
        </div>
      </div>
      </>
  )


}