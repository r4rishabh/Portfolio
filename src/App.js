import './App.css';
import AboutSection from './components/AboutSection';
// import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';

function App() {
  

  return (
    <div className='dark:bg-[#212121]'>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      {/* <BlogSection/> */}
      <ContactSection/>
    </div>
  );
}

export default App;
