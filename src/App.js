import './App.css';
import CarouselConrolled from './Frontend/CarouselConrolled';
import ContainerI from './Frontend/ContainerI';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContainerWithVideo from './Frontend/ContainerWithVideo ';
import Header from './Frontend/Header';
import Categories from './Frontend/Categories';
import RegisterPage from './Frontend/RegisterPage';
import CategoriesI from './Frontend/CategoriesI';
import Achievements from './Frontend/Achievements';
import PopularCourse from './Frontend/PopularCourses';
import Features from './Frontend/Features';
import Courses from './Frontend/Courses';
import StartLearning from './Frontend/StartLearning';
import FAQs from './Frontend/FAQS';
import Footer from './Frontend/Footer';
function App() {
  return (
<div classname="App" style={{
        backgroundImage: `url(${'/Assets/background.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100%', // Set the height of the background image
        width: '100%',   // Set the width of the background image
      }}  >  
       <header className="App-header">
       <Header/>
       <CarouselConrolled/>
       <ContainerI/>
       <Router>
        <ContainerWithVideo/>
             <Categories/>
             <CategoriesI/>
             <Achievements/>
             <PopularCourse/>
             <Features/>
             <Courses/>
             <StartLearning/>
             <FAQs/>
             <Footer/>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
      </header>
    </div>
  );
}

export default App;
