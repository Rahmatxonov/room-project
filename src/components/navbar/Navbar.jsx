import {  Link} from 'react-router-dom';
// import logo from '../../images/logoImzo.svg';
import logo from '../../images/rama.uz.jpg';

import { RxHamburgerMenu } from "react-icons/rx";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { useTranslation  } from 'react-i18next';
import i18n from 'i18next';

const Navbar = () => {
  const changeLang=(value)=>{
    i18n.changeLanguage(value)
   }
   const [isOpen,setIsOpen]=useState(false)
   const changeLangHandler =(e)=>{
    changeLang(e.target.value)
   }
   const {t} = useTranslation()

  return (
    <>
     <header>
     <nav className='container'>
       <div className='nav'>
       <img className='img' src={logo} alt="" />
        <ul className={`${isOpen ? 'show' : 'hide'}`}>
          <img src={logo} alt="" />
          <Link className='navlink'>{t("hero1")}</Link>
          <Link className='navlink'>Mahsulotlar</Link>
          <Link className='navlink'>Kalkulyator</Link>
          <Link className='navlink'>Yangiliklar</Link>
          <Link className='navlink'>Muddatli to'lov</Link>
          <select className='nav_right' name="" id="" onChange={changeLangHandler}>
               <option value="en">Ru</option>
               <option value="en">Uz</option>
         </select>

          <div id='blacks ' className="media_one  ">
                   <span><FaInstagram className='black' /></span>
                   <span><PiTelegramLogo className='black'/></span>
                   <span><SlSocialFacebook  className='black'/></span>
                   <span><FiYoutube  className='black'/></span>
                </div>
          <IoMdClose className='burgerBtn close '  onClick={()=>setIsOpen(!isOpen)}/>  
        </ul>
       </div>
        <div >
            <button className='mainButton'>Bepul o'lchash<LuSeparatorHorizontal /></button>
        </div>
        <div className='burgerBtn'>
        <RxHamburgerMenu className='open' onClick={()=>setIsOpen(!isOpen)}/>
        </div>
      </nav>
     </header>
    
    </>
  )
}

export default Navbar