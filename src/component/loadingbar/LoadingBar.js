import React from 'react'
import "./loadingbar.css"

function LoadingBar() {
  return (
    <div className='loading-container'>
        <div class="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export default LoadingBar