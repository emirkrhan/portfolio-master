import React from 'react'
import { useEffect, useState } from 'react'
import "./black.css"
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from 'react-scroll'
import emailjs from 'emailjs-com';
import { Squeeze as Hamburger } from 'hamburger-react'



function Black() {


    const [isOpen, setOpen] = useState(false)
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [buttonName, setButtonName] = useState("Gönder");
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuFunc = () => {
        setOpenMenu(!openMenu)
    }

    const closeMenuFunc = () => {
        setOpenMenu(false)
        setOpen(false)
    }
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const container = document.querySelector('.black-container');
        // const follower = document.querySelector('.follower');

        const handleMouseMove = (e) => {
            const containerRect = container.getBoundingClientRect();
            const x = e.clientX - containerRect.left;
            const y = e.clientY - containerRect.top;
            setFollowerPosition({ x, y });
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleName = (value) => {
        setName(value);
    }

    const handleMail = (value) => {
        setMail(value);
    }

    const handleMessage = (value) => {
        setMessage(value);
    }


    if (mail.length < 0) {
        return null;

    } else {

    }


    function sendEmail(e) {
        if (mail.length <= 0) {
            e.preventDefault();
            setButtonName("Boş alan bırakmayınız!");
            setTimeout(() => {
                setButtonName("Gönder");
            }, 2000);

        } else if (message.length <= 0) {
            e.preventDefault();
            setButtonName("Boş alan bırakmayınız!");
            setTimeout(() => {
                setButtonName("Gönder");
            }, 2000);


        } else if (name.length <= 0) {
            e.preventDefault();
            setButtonName("Boş alan bırakmayınız!");
            setTimeout(() => {
                setButtonName("Gönder");
            }, 2000);

        } else {
            e.preventDefault();
            setMail("");
            setName("");
            setMessage("");
            setButtonName("Mesajınız alındı.");
            setTimeout(() => {
                setButtonName("Gönder");
            }, 3000);

            emailjs.sendForm('service_vlsmv33', 'template_iww8mm5', e.target, 'pRivggAPeJPf9i9Oe')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

    }

    // window.onscroll = function () { scrollFunction() };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    //         document.getElementById("navbar").style.position = "fixed";
    //     } else {
    //         document.getElementById("navbar").style.position = "relative";
    //     }
    // }

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("upbtn").style.display = "flex";
        } else {
            document.getElementById("upbtn").style.display = "none";
        }
    }





    return (
        <div className='black-container'>

            <a href='/' id='upx'>{null}</a>
            <Link to="upx" spy={true} smooth={true} duration={500}>  <button className="upbtn" id='upbtn'><i class="fa-solid fa-angle-up"></i></button></Link>
            <div className="follower" style={{ transform: `translate(${followerPosition.x}px, ${followerPosition.y}px)` }}></div>
            <div className="space-div"></div>

            <div className="menu-div">
                <div className="menu-container">
                    <Fade className='menu-logoanimation'>
                        <div className='menu-logo'>EMIRKRHN©</div>
                    </Fade>

                    <Fade className='menu-taganimation'>
                        <div className='menu-tag'>
                            <Link className='tagxx' to="about" spy={true} smooth={true} duration={500}> HAKKIMDA</Link>
                            <Link className='tagxx' to="project" spy={true} smooth={true} duration={500}>PROJELER</Link>
                            <Link className='tagxx' to="blog" spy={true} smooth={true} duration={500}>BLOG</Link>
                            <Link className='tagxx' to="contact" spy={true} smooth={true} duration={500}>İLETİŞİM</Link>
                        </div>
                    </Fade>

                    <div className="menu-phone-icon">{openMenu ? <button className='button-black' onClick={openMenuFunc}><Hamburger toggled={isOpen} toggle={setOpen} rounded size={25}></Hamburger></button>
                        : <button className='button-white' onClick={openMenuFunc}><Hamburger toggled={isOpen} toggle={setOpen} rounded size={25}></Hamburger></button>} </div>
                    {openMenu ? <div className="opening-menu-container">
                        <div className="transparent-menu-div">
                            <Link className='tagxopen' to="about" spy={true} smooth={true} duration={500}> <button onClick={closeMenuFunc}>HAKKIMDA</button></Link>
                            <Link className='tagxopen' to="project" spy={true} smooth={true} duration={500}><button onClick={closeMenuFunc}>PROJELER</button></Link>
                            <Link className='tagxopen' to="blog" spy={true} smooth={true} duration={500}><button onClick={closeMenuFunc}>BLOG</button></Link>
                            <Link className='tagxopen' to="contact" spy={true} smooth={true} duration={500}><button onClick={closeMenuFunc}>İLETİŞİM</button></Link>
                            <div className="bottom-open">
                                <div className='bottom-country'>Samsun, Turkey</div>
                                <div className='bottom-tags'>
                                    <div className="tags-long"><a href='https://www.instagram.com/emir.krhan'>ig</a></div>
                                    <div className="tags-long"><a href='https://www.behance.net/emirhankrhan'>bh</a></div>
                                    <div className="tags-long"><a href='https://github.com/emirhankorhan'>gh</a></div>
                                </div>

                            </div>
                            <div className="space-bott"></div>
                        </div>
                    </div> : ""}
                </div>


            </div>

            <Fade triggerOnce={true} className='about-containeranimation'>
                <div className='about-container'>
                    <div className="who-am-i">BEN KİMİM? &nbsp; <span>BİRKAÇ ŞEY...</span></div>
                    <div className="about-number-div">
                        <div className='number-text'>01</div>
                        <div className='about-text'>Merhaba! Ben Emir, uzun süredir <br></br> Front-End web geliştirme ve grafik <br></br> tasarım ile uğraşıyorum.</div>


                    </div>
                </div>
            </Fade>




            <a href='/' id='about'>{null}</a>
            <Fade className='big-aboutanimation' triggerOnce={true}>HAKKIMDA</Fade>

            <div className="about-two-cont">
                <Fade className='about-smalleranimation'>
                    <div className="about-smaller">
                        <div className='abbout'>HAKKIMDA &nbsp; <span>DAHA FAZLASI</span></div>
                        <div className='years-about'>2002-2023</div>
                    </div>
                </Fade>

                <Fade className='photoandtextanimation'>
                    <div className="photoandtext">
                        <div id='navbar' className='photo-ab'><div className="number-ab">02</div></div>
                        <div className="about-ab">ÇEŞİTLİ DİSİPLİNLERDE <br /> AJANSLAR, MÜŞTERİLER <br /> VE GRUPLARLA ÇALIŞTIM <br /> </div>
                    </div>
                </Fade>

                <Fade className='texts-lifeanimation'>
                    <div className="texts-life">
                        <div className="texts-cont">
                            <div className="texts-number">01</div>
                            <div className="texts-a-text">
                                <div className='texts-title'>ÖĞRENİM HAYATIM</div>
                                <div className='texts-myower'>Öğrenim hayatıma Payas Nursan Anadolu Lisesinden sonra
                                    Samsun Üniversitesinde devam ediyorum. Dört yıllık yazılım mühendisliği bölümünü
                                    bitirdikten sonra ikinci üniversite olarak grafik tasarım okumayı planlıyorum.
                                    Kendimi yazılım alanında ve front-end kısmında geliştirmeye devam ediyorum.</div>
                            </div>
                        </div>
                        <div className="texts-cont">
                            <div className="texts-number">02</div>
                            <div className="texts-a-text">
                                <div className='texts-title'>İŞ DENEYİMLERİM</div>
                                <div className='texts-myower'>Bir süreliğine küçük bir yayınevinde grafik tasarımcı
                                    olarak kitap kapağı tasarladım ve bu işe freelance olarak devam ediyorum.
                                    Aynı şekilde müşterilerime kişisel web siteleri ve portföyler tasarlıyorum.
                                    Kısa süre önce bir belediyenin bilgi işlem bölümünde yazılım stajyeri olarak çalıştıktan sonra
                                    uzaktan başka işlerde çalışmaya devam ediyorum. Yakın zamanda kişisel
                                    posterler bastırabileceğiniz bir küçük işletme kurmayı planlıyorum. </div>
                            </div>
                        </div>
                        <div className="texts-cont">
                            <div className="texts-number">03</div>
                            <div className="texts-a-text">
                                <div className='texts-title'>İLGİ ALANLARIM</div>
                                <div className='texts-myower'>Kariyerimi ilerletirken üzerinde yürüdüğüm bir diğer yol da yazarlık ve şairlik.
                                    Yazı yazmak uzun süredir benimsediğim bir davranış olarak artık hayatımın vazgeçilmez bir parçası oldu,
                                    buna şiirler de dahildi. Buna ithafen etrafımdan aldığım güç ile on dokuz yaşımda ilk  &nbsp;
                                    <a href='https://www.hepsiburada.com/ruhu-kirik-adam-emirhan-korhan-pm-HBC000017K7GU'>kitabımı</a> &nbsp;
                                    çıkartarak kendim için önemli bir adım attım. Yeni romanım için çalışmalarım devam ediyor, kim bilir o da her an çıkabilir...</div>
                            </div>
                        </div>
                        <div className="texts-cont">
                            <div className="texts-number">04</div>
                            <div className="texts-a-text">
                                <div className='texts-title'>UZMANLIK ALANLARIM</div>
                                <div className='texts-myower'>Profesyonel olmamakla birlikte yazılım kısmında html, css, javascript, bootstrap, material.ui, 
                                java ve spring boot gibi yazılım dilleri ve yazılım kütüphaneleri üzerine çalışıyorum. Grafik tasarım alanında Adobe 
                                Photoshop ve baskı mizanpaj çalışmaları için Adobe Indesign kullanmaktayım. Adobe Illustrator da kullanmak 
                                isterdim ama benim için fazla karışık :) </div>
                            </div>
                        </div>

                    </div>
                </Fade>
            </div>

            <div className="ruin-container">
                <div className="ruin-text">RUIN POSTER AÇILDI!</div>
                <div className="ruin-slogan">Hemen Ruin Poster'i keşfetmeye başla! Sanatın ve özelleştirilebilir <br/> tasarımların eşsiz dünyasına gir ve kendine ait bir parça bulmak için biraz göz at! </div>
                <div className="ruin-works">
                    <div className="ruin-image2"></div>
                    <div className="ruin-image1"></div>
                    <div className="ruin-image3"></div>
                </div>
            </div>

            <a href='/' id='project'>{null}</a>

            <div className="project-cont">
                <div className="project-title">DÜNDEN BUGÜNE &nbsp; <span>BİRKAÇ PROJE...</span></div>
                <Fade className='project-boxanimation'>
                    <div className="project-box">
                        <div className='boxs-one'>
                            <div className='box-one'>
                                <div className='boxone-image'><div className="black-boximage"><div className="white-animation-box"></div></div></div>
                                <div className='boxone-title'>DEVIL - BOOK COVER</div>
                            </div>
                            <div className='box-two'>
                                <div className='boxtwo-image'><div className="black-boximage"><div className="white-animation-box"></div></div></div>
                                <div className='boxone-title'>FLOODY - MOBILE APP</div>
                            </div>
                            <div className='box-three'>
                                <div className='boxthree-image'><div className="black-boximage"><div className="white-animation-box"></div></div></div>
                                <div className='boxone-title'>ALIVE - MOVIE BANNER</div>
                            </div>
                        </div>
                        <div className='boxs-two'>

                            <div className='box-four'>
                                <div className='boxfour-image'><div className="black-boximage"><div className="white-animation-box"></div></div></div>
                                <div className='boxone-title'>BLAKE BURGER - ADVERTISEMENT</div>
                            </div>
                            <div className='box-two'>
                                <div className='boxfive-image'><div className="black-boximage"><div className="white-animation-box"></div></div></div>
                                <div className='boxone-title'>TEK BİR PATİ - BANNER DESIGN</div>
                            </div>
                            <div className='box-three'>
                                <div className='boxsix-image'><div className="black-boximage"><div className="white-animation-box"></div></div></div>
                                <div className='boxone-title'>FLEE - MOBILE APP</div>
                            </div>
                        </div>
                        <div className="project-btntext">
                            <div className="pro-text">Daha fazla proje görmek ve çalışmaları <br /> yakından incelemek için fotoğraf <br /> galerisine göz atmayı unutma!</div>
                            <Zoom className="pro-btn">
                                <a className="btn-pro" href='/gallery'>GALERİYİ GÖR <div className="hover-tagg"></div></a>
                            </Zoom>
                        </div>
                    </div>
                </Fade>
            </div>

            <a href='/' id='blog'>{null}</a>
            <div className="blog-container">
                <div className="blog-title">BİRKAÇ BLOG OKU...</div>
                <div className="blogs-div">

                    <Fade className='blog-content1animation'>
                        <div className="blog-content1">
                            <div className='blog-text'>
                                <div className='blog-daylight'><i class="fa-solid fa-circle fa-fade"></i> &nbsp; &nbsp; GÜNCEL İÇERİK</div>
                                <div className='blog-contitle'>YAZILIMA BAŞLAMANIN <br /> TEMELLERİ</div>
                                <div className='blog-context'>Yazılım dünyası, sonsuz olanaklar sunan heyecan verici bir yolculuktur.
                                    Herkes için farklı bir hikaye ve motivasyon vardır, ancak yazılıma başlamak için herkesin takip edebileceği
                                    temel adımlar ve ipuçları bulunmaktadır. Bu makalede, yazılıma başlamak isteyenler için temel bilgileri
                                    ve rehberliği sunacağız. Yazılıma başlamadan önce, neden yazılımı öğrenmek istediğinizi ve ne tür projelerde çalışmak
                                    istediğinizi düşünün. Belirli bir hedef veya proje, sizi motive edebilir ve öğrenme sürecinde size yol gösterebilir...</div>
                                <div className='blog-con-btn'><Zoom className='blog-con-animate'><a className="btn-problog" href="/">DEVAMINI OKU &nbsp; <i class="fa-solid fa-location-arrow"></i> <div className='hover-tagg'></div></a></Zoom></div>
                            </div>
                            <div className='blog-image1'><div className="img-addblog1"></div></div>
                        </div>
                    </Fade>

                    <Fade className='blog-content2animation'>
                        <div className="blog-content2">
                            <div className='blog-image2'><div className="img-addblog2"></div></div>
                            <div className='blog-text'>
                                <div className='blog-daylight'><i class="fa-solid fa-circle fa-fade"></i> &nbsp; &nbsp; GÜNCEL İÇERİK</div>
                                <div className='blog-contitle'>YARATICILIK: SANATIN <br /> DİJİTAL DÜNYASI</div>
                                <div className='blog-context'>Grafik tasarım, günümüzün dijital çağında hayati bir rol oynayan
                                    yaratıcı bir sanat ve iletişim biçimidir. Her yerde karşımıza çıkan logolardan web sitelerine
                                    ve reklamlardan afişlere kadar pek çok alanda grafik tasarımın etkisi bulunur. Bu yazıda, grafik
                                    tasarımın ne olduğunu, neden önemli olduğunu ve yaratıcılığın bu alandaki rolünü keşfedeceğiz. Grafik tasarım,
                                    metin, görseller ve renklerin uyumlu bir şekilde düzenlenmesiyle iletişimi etkili bir şekilde aktarmayı amaçlayan bir sanat dalıdır...</div>
                                <div className='blog-con-btn'><Zoom className='blog-con-animate'><a className="btn-problog" href="/">DEVAMINI OKU &nbsp; <i class="fa-solid fa-location-arrow"></i> <div className='hover-tagg'></div></a></Zoom></div>
                            </div>
                        </div>
                    </Fade>

                    <Fade className='blog-content1animation'>
                        <div className="blog-content1">
                            <div className='blog-text'>
                                <div className='blog-daylight'><i class="fa-solid fa-circle fa-fade"></i> &nbsp; &nbsp; GÜNCEL İÇERİK</div>
                                <div className='blog-contitle'>TEKNOLOJİ ÇAĞINDA <br /> YAPAY ZEKA</div>
                                <div className='blog-context'>Teknolojinin hızlı gelişimi, dünyayı kökten değiştiren bir dönemde yaşıyoruz.
                                    Bu değişimlerin merkezinde ise yapay zeka (YA) yer alıyor. Bu makalede, günümüzdeki teknoloji trendlerini ve
                                    yapay zeka alanındaki gelişmeleri inceleyeceğiz. Günümüzde, teknoloji her yönüyle yaşamımızın bir parçası haline geldi.
                                    Akıllı telefonlar, tabletler, giyilebilir teknolojiler ve IoT (Nesnelerin İnterneti) cihazları, günlük hayatımızı büyük
                                    ölçüde etkiliyor. İnternet, dünyanın dört bir yanındaki insanları bir araya getiriyor ve bilgiye erişimi kolaylaştırıyor...</div>
                                <div className='blog-con-btn'><Zoom  className='blog-con-animate'><a className="btn-problog" href="/">DEVAMINI OKU &nbsp; <i class="fa-solid fa-location-arrow"></i> <div className='hover-tagg'></div></a></Zoom></div>
                            </div>
                            <div className='blog-image1'><div className="img-addblog3"></div></div>
                        </div>
                    </Fade>

                    <Fade className='blog-content2animation'>
                        <div className="blog-content2">
                            <div className='blog-image2'><div className="img-addblog4"></div></div>
                            <div className='blog-text'>
                                <div className='blog-daylight'><i class="fa-solid fa-circle fa-fade"></i> &nbsp; &nbsp; GÜNCEL İÇERİK</div>
                                <div className='blog-contitle'>DİJİTAL DÜNYANIN <br /> ÖN YÜZÜ</div>
                                <div className='blog-context'>Web geliştirme, günümüzün dijital çağında hayati bir rol oynayan heyecan
                                    verici bir alandır. Her şeyden önce, web siteleri ve web uygulamaları, modern yaşamın vazgeçilmez bir
                                    parçası haline gelmiştir. Bu makalede, web geliştirme ve frontend geliştirme konularını ele alacak ve bu
                                    alanda başarılı olmanız için gerekli olan bilgi ve becerileri inceleyeceğiz. Web geliştirme, bir web sitesi
                                    veya web uygulaması oluşturmak ve yönetmek için kullanılan sürecin adıdır. Temel olarak, web geliştirme
                                    iki ana bileşeni içerir...</div>
                                <div className='blog-con-btn'><Zoom className='blog-con-animate'><a className="btn-problog" href="/">DEVAMINI OKU &nbsp; <i class="fa-solid fa-location-arrow"></i> <div className='hover-tagg'></div></a></Zoom></div>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>

            <a href='/' id='contact'>{null}</a>

            <Fade className='big-contactanimation'>
                <div className="big-contact">BENİMLE KONUŞ</div>
            </Fade>

            <div className="contact-container">
                <Fade className='contact-infoanimation'>
                    <div className='contact-info'>
                        <div className="contact-inftext">AÇIK VE SEÇİLİR OL...</div>
                        <div className="contact-infnumber">05</div>
                    </div>
                </Fade>

                <Fade className='contact-formanimation'>
                    <div className='contact-form'>
                        <form onSubmit={sendEmail}>
                            <div className='maildiv'>

                                <div className='mail-inpp'><input spellCheck={false} value={name} onChange={(i) => handleName(i.target.value)} autocomplete="off" className='namemail' placeholder='İsim giriniz*' type="text" name="user_name" /></div>
                                <div className='mail-inpp'><input spellCheck={false} value={mail} onChange={(i) => handleMail(i.target.value)} autocomplete="off" className='mailmail' placeholder='E-Mail giriniz*' type="email" name="user_email" /></div>
                                <div className="mail-texx"><textarea spellCheck={false} value={message} onChange={(i) => handleMessage(i.target.value)} autocomplete="off" maxLength={400} className='messagemail' placeholder='Mesaj giriniz*' type='text' name="message" /></div>
                                <Zoom className='buttonmailanimation'>
                                    <button className='buttonmail' type="submit">{buttonName}</button>
                                </Zoom>

                            </div>
                        </form>

                    </div>
                </Fade>

            </div>
            <div className="footer-container">
                <Fade className='footer-textanimation'>
                    <div className='footer-text'>© 2023 All Rights Reserved &nbsp; <i class="fa-solid fa-certificate"></i> &nbsp; Created by EmirKrhn</div>
                </Fade>

                <Fade className='footer-socialanimation'>
                    <div className='footer-social'>
                        <div className="footer-icon"><a href='https://www.instagram.com/emir.krhan'>Instagram</a></div>
                        <div className="footer-icon"><a href='https://www.behance.net/emirhankrhan'>Behance</a></div>
                        <div className="footer-icon"><a href='https://www.wattpad.com/user/sadecemeftun'>Wattpad</a></div>
                        <div className="footer-icon"><a href='https://github.com/emirhankorhan'>Github</a></div>
                    </div>
                </Fade>

            </div>
        </div>
    )
}

export default Black