import React from 'react'
import "./content2.css"

function Content2() {
  return (
    <div className='content2-container'>
        <div className="content2-div">
            <div className='content2-blog'>
                <div className='blog-content2-titleandimage'>
                    <div className='blog-content2-title'>node.js ve npm nasıl kurulur? (tüm işletim sistemleri için)</div>
                    <div className='blog-content2-image'><div className="image-add-content2"></div></div>
                    </div>
                <div className='blog-content2-text'>İleri düğmesine tıklayarak kurulumun devam etmesine izin verin. Opsiyonel olarak, "Automatically install the necessary tools..." seçeneğini işaretleyerek npm'i de otomatik olarak yükleyebilirsiniz.</div>
                <div className='blog-content2-btn'>
                <button>
              DEVAM ET
            </button>
            <div className="start-btn-ico"></div>
                </div>
            </div>

            <div className='content2-blog'>
            <div className='blog-content2-titleandimage'>
                    <div className='blog-content2-title'>react temel bileşenleri nelerdir? (components)</div>
                    <div className='blog-content2-image'><div className="image-add-content2"></div></div>
                    </div>
                <div className='blog-content2-text'>React uygulamaları, bileşenlerin hiyerarşik bir şekilde birleştirilmesiyle oluşturulur. Bileşenler, kullanıcı arayüzünün bölümlerini temsil eder. Örneğin, bir düğme, bir form alanı veya bir liste bir bileşen olabilir.</div>
                <div className='blog-content2-btn'>
                <button>
              DEVAM ET
            </button>
            <div className="start-btn-ico"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content2