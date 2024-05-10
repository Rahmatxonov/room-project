// import logo from '../../images/logoImzo.svg';
import logo from '../../images/rama.uz.jpg';
import office from  '../../images/imzoof.jpg'
import { GoArrowUpRight } from "react-icons/go";
import sv1 from '../../images/sg1.svg' ;
import sv2 from '../../images/sg2.svg' ;
import sv3 from '../../images/sg3.svg' ;
import sv4 from '../../images/sg4.svg' ;



const About = () => {
  return (
   <>
      <div className="about container">
        <div className="about_left">
           <img src={logo} alt="logo" />
           <p>IMZO 2016-yil aprel oyida tashkil etilgan bo‘lib, hozirgi kunda O‘zbekistondagi eng yirik rom ishlab chiqaruvchisi hisoblanadi. Bugungi kunda IMZO O'zbekiston Respublikasi bo‘ylab 60 dan ortiq rasmiy va hamkor shourumlari hamda o‘z shourumlariga ega 4 ta franshizaga ega.</p>
            <button>Batafsil <GoArrowUpRight className='open'/></button>
        </div>
        <div className="about_right">
             <img src={office} alt="" />
        </div>

      </div>
      <div className="about_work container">
         <div className="about_work_blog">
             <div>
             <span>1000 +</span>
            <p>Tajribali mutaxassislar</p>
             </div>
             <img src={sv1} alt="" />
         </div>
         <div className="about_work_blog">
             <div>
             <span>70 000</span>
            <p>m<sup>2</sup>  ishlab chiqarish maydoni</p>
             </div>
             <img src={sv2} alt="" />
         </div>
         <div className="about_work_blog">
             <div>
             <span>2 000 000 m<sup>2</sup></span>
            <p>Yillik ishlab chiqarish hajmi</p>
             </div>
             <img src={sv3} alt="" />
         </div>
         <div className="about_work_blog">
             <div>
             <span>15</span>
            <p>Robotlashtirilgan liniyalar</p>
             </div>
             <img src={sv4} alt="" />
         </div>
      </div>

   </>
  )
}

export default About