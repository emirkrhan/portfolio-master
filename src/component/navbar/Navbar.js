// import React, { useState, useEffect } from 'react'
// import "./navbar.css"
// import Content1 from '../content1/Content1'

// function Navbar() {

//   const [searchPop, setSearchPop] = useState(false)
//   const [dropdownOpen, setDropdownOpen] = useState(false)

//   const searchPopUpFunc = () => {
//     setSearchPop(true)
//   }

//   const dropdownOpenFunc = () => {
//     setDropdownOpen(!dropdownOpen)
//   }

//   useEffect(() => {
//     const closeOnOutsideClick = (e) => {
//       if (searchPop && !e.target.closest("#myInputDiv")) {
//         setSearchPop(false);
//       }
//     };

//     window.addEventListener("click", closeOnOutsideClick);

//     return () => {
//       window.removeEventListener("click", closeOnOutsideClick);
//     };
//   }, [searchPop]);

//   useEffect(() => {
//     const closeOnOutsideClick = (e) => {
//       if (dropdownOpen && !e.target.closest("#myInputTwo")) {
//         setDropdownOpen(false);
//       }
//     };

//     window.addEventListener("click", closeOnOutsideClick);

//     return () => {
//       window.removeEventListener("click", closeOnOutsideClick);
//     };
//   }, [dropdownOpen]);



//   return (
//     <div className='navbar-container'>
//       <div className='navbar-logo-container'></div>
//       <div className='navbar-search-bar-container'>
//         {searchPop ?

//           <div id='myInputDiv' className='search-open-div'>
//             <div className='search-glass-icon'></div>
//             <div className='search-input'>
//               <button onClick={searchPopUpFunc} className="input-pop-up-button">
//                 <input placeholder='Arama yap...' type="text" className="search-func-black-input" />
//               </button>
              

//             </div>

//             <div className="search-popup-div"></div>
//           </div>



//           :

//           <div className='search-div'>
//             <div className='search-glass-icon'></div>
//             <div className='search-input'>
//               <button onClick={searchPopUpFunc} className="input-pop-up-button">
//                 <input placeholder='Arama yap...' type="text" className="search-func-input" />
//               </button>
//             </div>
            
//           </div>}

//       </div>
//       <div className='navbar-other-container'>
//         <div className="other-dropdown-menu">
//         {dropdownOpen ? <button id='myInputTwo' onClick={dropdownOpenFunc} className="dropdown-content-border-button">Blog &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; <i class="fa-solid fa-angle-up"></i>
//               <div className="open-drop-tag-div">
//                 <div className="dropdown-tag"><a>Blog</a></div>
//                 <div className="dropdown-tag"><a>React</a></div>
//                 <div className="dropdown-tag"><a>JavaScript</a></div>
//                 <div className="dropdown-tag"><a>Html</a></div>
//                 <div className="dropdown-tag"><a>Css</a></div>
//               </div>
//               </button>
//               :
//               <button onClick={dropdownOpenFunc} className="dropdown-content-button">Blog &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; <i class="fa-solid fa-angle-down"></i>
//               </button> }
//         </div>
//         <div className='other-button-div'>
//           <button className="others-button">
//             İçerikleri Keşfet
//           </button>


//         </div>
//         <div className='bell-div'><button className="bell-button">
//    <svg viewBox="0 0 448 512" class="bell"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
// </button></div>
//       </div>
//     </div>
//   )
// }

// export default Navbar