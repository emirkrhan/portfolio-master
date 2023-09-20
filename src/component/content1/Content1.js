import React from 'react'
import "./content1.css"

function Content1() {
  return (
    <div className='content1-container'>
      <div className="content-div">
        <div className='content-text-div'>
          <div className='first-content-date'>Mart 6, 2023</div>
          <div className='first-content-title'>Case Study: Crafting a Digital Experience in the Banking...</div>
          <div className='first-content-about'>
            <div className='about-icon'></div>
            <div className='about-name'>React</div>
          </div>
          <div className='first-content-text'>We were thrilled to take on the challenge of designing and developing
            the website for PandaPay, a dynamic fintech startup on a mission to redefine the digital banking...</div>
          <div className='first-content-start-btn'>
            <button>
              DEVAM ET
            </button>
            <div className="start-btn-ico"></div>
          </div>
        </div>
        <div className='content-image-div'>
          <div className="image-add-content1"></div>
        </div>
      </div>
    </div>
  )
}

export default Content1