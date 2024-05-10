import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
const Contact = () => {
  return (
    <div className='contact'>
        <h3 className="container">Biz bilan bog'lanish</h3>
         <div className="contact_box container">
            <div className="contact_box_left">
                <h4>Kontakt ma'lumotlar</h4>
                <p>Savollaringiz bormi? Biz bilan bog‘laning yoki murojaatingizni qoldiring. Menejer siz bilan bog‘lanadi!</p>
                <div className="contact_box_left_main">
                   <span><IoLocationOutline /> O'zbekiston, Toshkent, Yunusobod, Stroycenter, 209-office</span>
                   <span><AiOutlineMail /> info@rama.uz</span>
                   <span><LuPhoneCall /> +998 (71) 443-11-33</span>
                   <span><LuPhoneCall /> +998 (90) 915-11-33</span>
                </div>
                <div className="contact_box_left_media">
                   <span><FaInstagram /></span>
                   <span><PiTelegramLogo /></span>
                   <span><SlSocialFacebook /></span>
                   <span><FiYoutube /></span>
                </div>
            </div>
            <div className="contact_box_right">
               <form action="" className="form1">
                <input type="text" placeholder="Ism" required/>
                <input type="text" placeholder="Familiya"/>
                <input type="text" placeholder="Elektron pochta"/>
                <input type="number" placeholder="Telefon raqamingiz" required/>
               </form>
               <h4>Sizni nima qiziqtiradi?</h4>
               <form action="" className="form2">
                 <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                   Romlar va eshiklar
                 </label>
                 <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                   Surilma tizimlari
                 </label>
                 <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                   Fasad tizimlari
                 </label>
                 <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                   Import tizimlari
                 </label>
               </form>
                <textarea name="" id="" cols="30" rows="10" placeholder="Xabar">
                </textarea>
                <div className="tasdiqlash">
                  <div className="tasdiqlash_main">
                    <input type="checkbox" name="" id="" />
                     <p>"Yuborish" tugmasini bosish orqali siz shaxsiy ma'lumotlarni qayta ishlash uchun shartlarni qabul qilasiz.</p>
                  </div>
                    <button>Yuborish</button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Contact