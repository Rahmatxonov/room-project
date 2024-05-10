import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import translationsRu from '../../locale/translateRus';
// import translationsUz from '../../locale/translateUz';

// i18n.use(initReactI18next).init({
//   ru:{translation:translationsRu},
//   uz:{translation:translationsUz},
//   lng:'ru',
//   fallbackLng:'ru'
// })


const Layout = () => {
  // const changeLang=(value)=>{
  //   i18n.changeLanguage(value)
  // }

  return (
    <>
      <Navbar />
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout