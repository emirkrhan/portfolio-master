import './App.css'
import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Black from './component/black/Black';




function App() {

  return(
    <div className="App">
      <Routes>
          <Route path='/' element={<Black />} />
          
        </Routes>
    </div>
  )

  

  
}

export default App

// const [onButton, setOnButton] = useState(false);

//   const buttonaBas = () => {
//     setOnButton(true);
//   }

//   const buttonaBasma = () => {
//     setOnButton(false);
//   }

//   if (onButton === false) {
//     return (
//       <div className='anadivana'>
        
//       <div className='navbar'>
//         <div className='navbarlogo'>Emir.krhan</div>
//         <div className='navbarlink'>
//           <a href='/' >Ana Sayfa</a>
//           <Link className='atagx' to="about" spy={true} smooth={true} duration={500}>
//           Hakkımda
//         </Link>
//         <Link className='atagx' to="contact" spy={true} smooth={true} duration={500}>
//           İletişim
//         </Link>
//         </div>
//         <i onClick={buttonaBas} class="fa-brands fa-microsoft"></i>
//       </div>
//       <a href='/' id='about'>{null}</a>
//       <Home/>
//       {/* <About/> */}
//       <Project/>
//       <a href='/' id='contact'>{null}</a>
     
//       <Footer/>
//       </div>
//     )}else if(onButton === true){
//       return(
//         <div>
//           <div className='navbar'>
//         <div className='navbarlogo'>Emir.krhan</div>
//         <div className='navbarlink'>
//           <a href='/' >Ana Sayfa</a>
//           <Link className='atagx' to="about" spy={true} smooth={true} duration={500}>
//           Hakkımda
//         </Link>
//         <Link className='atagx' to="contact" spy={true} smooth={true} duration={500}>
//           İletişim
//         </Link>
//         </div>
//         <i onClick={buttonaBas} class="fa-brands fa-microsoft"></i>
//       </div>
//         <div className='miniondiv'>
//           <div className='tagone'>
       
//           <i onClick={buttonaBasma} class="fa-solid fa-xmark"></i>
//           </div>
//           <div className='tagtwo'><a href='/' >
//             <button className='opacitybutton' onClick={buttonaBasma}>Ana Sayfa</button>
//               </a></div>
//           <div className='tagthree'>
//           <Link className='atagx' to="about" spy={true} smooth={true} duration={1000}>
//           <button className='opacitybutton' onClick={buttonaBasma}>Hakkımda</button>
//         </Link>
//           </div>
//           <div className='tagfive'>
//           <Link className='atagx' to="contact" spy={true} smooth={true} duration={1000}>
//           <button className='opacitybutton' onClick={buttonaBasma}>İletişim</button>
//         </Link>
//           </div>
          
          
//         </div>
//         <a href='/' id='about'>{null}</a>
//       <Home/>
//       {/* <About/> */}
//       <Project/>
//       <a href='/' id='contact'>{null}</a>
//       <Footer/>
//         </div>
//       )
//     }