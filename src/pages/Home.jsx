import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Hamkorlar from "../components/hamkorlar/Hamkorlar"
import Hero from "../components/hero/Hero"
import Mahsulotlar from "../components/mahsulotlar/Mahsulotlar"
import Mijozlar from "../components/mijozlar/Mijozlar"
import Shourumlar from "../components/shourumlar/Shourumlar"

// import { initReactI18next } from 'react-i18next';
// import translationsRu from './locale/translateRus';
// import translationsUz from './locale/translateUz';

// i18n.use(initReactI18next).init({
//   ru:{translation:translationsRu},
//   uz:{translation:translationsUz},
//   lng:'ru',
//   fallbackLng:'ru'
// })

const Home = () => {
  // const changeLang=(value)=>{
  //   i18n.changeLanguage(value)
  //  }
  return (
    <div>
      {/* <Navbar changeLang={changeLang}/> */}
       <Hero />
       <Mahsulotlar/>
       <About/>
       <Mijozlar/>
       <Hamkorlar/>
       <Shourumlar/>
       <Contact/>
    </div>
  )
}

export default Home