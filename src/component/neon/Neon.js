// import { useState } from "react"
// import React from 'react'
// import "./neon.css"
// import { Squeeze as Hamburger } from 'hamburger-react'
// import Projects from "../projects/Projects"



// function Neon() {

//     const [isOpen, setOpen] = useState(false)

//     const openMenuFunc = () => {
//         setOpen(!isOpen)
//     }

//   return (
//     <div className="genel-div">
//     <div className='neon-container'>
//         {isOpen ? <div className="logo-black-cont">Krhn</div> : <div className="logo-cont">Krhn</div> }
//         {isOpen ? <button className="blog-anima-black-btn">
//             <div className="blog-text">See the Blog</div>
//             <div className="blog-container"><div className="blog-icon"><i class="fa-solid fa-arrow-right"></i></div></div>
//         </button> : <button className="blog-anima-btn">
//             <div className="blog-text">See the Blog</div>
//             <div className="blog-container"><div className="blog-icon"><i class="fa-solid fa-arrow-right"></i></div></div>
//         </button>}
        
//         <button onClick={openMenuFunc} className="anima-menu">
//           <Hamburger rounded size={25}></Hamburger>    
//         </button>

//         <div className="about-cont">
//           <div className="about-imim"><div className="circle-name"></div></div>
//           <div className="about-big">I’m Emir, a Front-End Web Developer</div>
//           <div className="about-smaller">I also work on Graphic Design. I love reading and writing book. I am also trying to develop my career in the field of writing.</div>
//         </div>

        
//         {isOpen ? <div className="open-hidden-menu"></div> : <div className="close-hidden-menu"></div>}
//         {isOpen ? <div className="open-linkthefix"><div className="open-link-cont">
//             <div className="tag-link-div">
//                 <div className="tag-site"><div className="tag-smooth">HOME</div></div>
//                 <div className="tag-site"><div className="tag-smooth">ABOUT</div></div>
//                 <div className="tag-site"><div className="tag-smooth">PROJECT</div></div>
//                 <div className="tag-site"><div className="tag-smooth">CONTACT</div></div>
//                 <div className="tag-site"><div className="tag-smooth">BLOG</div></div>
//             </div>
//             <div className="contact-link-div"></div>
//         </div></div> : ""}
//     </div>
//     <Projects/>
//     </div>
//   )
// }

// export default Neon