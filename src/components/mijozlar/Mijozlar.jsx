import { GoArrowUpRight } from "react-icons/go";
import { LiaHandPointRightSolid } from "react-icons/lia";

const Mijozlar = () => {
  return (
    <div className="mijozlar">
        <h3 className="mijozlar_title container">Mijozlar fikri</h3>
        <div className="mijozlar_box container">
           <div className="mijozlar_box_blog">
             <img src="https://imzo.uz/uploads/otziv/39b447068dcf.png" alt="s" />
              <span>09.04.2024</span>
              <h4>Mijoz fikri</h4>
              <p>Mijozlarimizdan biri Imzo bilan hamkorlik haqida batafsil so'zlab bergan videoni e'tiboringizga havola etamiz. </p>
               <div className="youtubeL">
               <LiaHandPointRightSolid />
               <a href=" https://youtu.be/imzo">https://youtu.be/imzo</a>
               </div>
              <p>Sizning fikr-mulohazalaringiz bizni juda mamnun qiladi va nafaqat hozirgi darajamizni saqlab qolishga, balki yanada rivojlanishimizga undaydi!</p>
           </div>
           <div className="mijozlar_box_blog">
             <img src="https://imzo.uz/uploads/otziv/da058fbcd1be.png" alt="s" />
              <span>09.04.2024</span>
              <h4>Mijoz fikri</h4>
              <p>Mijozlarimizdan biri Imzo bilan hamkorlik haqida batafsil so'zlab bergan videoni e'tiboringizga havola etamiz. </p>
               <div className="youtubeL">
               <LiaHandPointRightSolid />
               <a href=" https://youtu.be/CgcKjb7_N-w?si=iRhdtZLW2UUu5q_6">https://youtu.be/imzo</a>
               </div>
              <p>Sizning fikr-mulohazalaringiz bizni juda mamnun qiladi va nafaqat hozirgi darajamizni saqlab qolishga, balki yanada rivojlanishimizga undaydi!</p>
           </div>
        </div>
        <div className="mahsulotlar_hammasi container">
        <span></span>
         <button className='malumotlar_btn'>Barcha fikrlar <GoArrowUpRight className='open'/></button>
    </div>

    </div>
  )
}

export default Mijozlar