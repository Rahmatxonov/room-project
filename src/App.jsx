
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './main.scss'
import Layout from './components/layout/Layout';
import Home from './pages/Home';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import translationsRu from './locale/translateRus';
// import translationsUz from './locale/translateUz';

// i18n.use(initReactI18next).init({
//   ru:{translation:translationsRu},
//   uz:{translation:translationsUz},
//   lng:'ru',
//   fallbackLng:'ru'
// })

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Layout/>}>
           <Route path='/' element={<Home/>}/>
         </Route>
       </Routes>
     </BrowserRouter>
       {/* <Navbar/>
      <Footer/> */}
    </>
  )
}

export default App
