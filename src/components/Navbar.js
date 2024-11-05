import React,{useState,useEffect} from 'react'
import darkmodeIcon from '../resources/icons8-dark-mode-30.png'
import lightModeIcon from '../resources/icons8-light-mode-78.png'
import hamburger from '../resources/hamburgerIcon.png'
import hamburgerBlack from '../resources/hamburgerDark.png'
import { Link } from 'react-scroll'




function Navbar() {
  const [theme,setTheme]=useState("light");
  const [menuToggle,setMenuToggle]=useState(false)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggler=()=>{
    if(theme==='dark')
    setTheme('light')
    else
    setTheme('dark')
  }
  


  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-[#212121] dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center flex flex-row">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold  border-b-2 border-teal-600 dark:text-white ">RISHABH DEV SINGH</h2>
              </div>
          </div>
        </div>
        <div className='flex items-center'>
        <div className='hidden md:flex flex-row items-center gap-4'>
            <h2 className='dark:text-white '>Home</h2>
            <Link
                  to="about"
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>About</h2>
                </Link>
            <Link
                  to="projects"
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>Projects</h2>
                </Link>
                {/* <Link
                  to="blog"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>Blogs</h2>
                </Link> */}
                <Link
                  to="contact"
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>Contact</h2>
                </Link>
               
        </div>
        {
                  theme && theme==='dark'? <img  onClick={themeToggler} className='w-10 cursor-pointer ml-4' src={lightModeIcon} alt='darkmode-icon'/>: <img  onClick={themeToggler} src={darkmodeIcon} className='cursor-pointer ml-4' alt='darkmode-icon'/>
                }
        {
          theme && theme==='dark'? <img onClick={()=>setMenuToggle(!menuToggle)} className='w-8 ml-4 flex md:hidden' src={hamburger} alt='menu-icon'/>: <img onClick={()=>setMenuToggle(!menuToggle)} className='w-8 ml-4 flex md:hidden' src={hamburgerBlack} alt='menu-icon'/>
        }
        </div>
      </div>
     {
      menuToggle &&  <div className='absolute right-0 top-16 sm:right-16 flex flex-col items-center gap-4 z-10 px-4 py-2 bg-white dark:bg-[#212121]  shadow-lg rounded-lg'>
      <h2 className='dark:text-white '>Home</h2>
            <Link
                  to="about"
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>About</h2>
                </Link>
            <Link
                  to="projects"
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>Projects</h2>
                </Link>
                {/* <Link
                  to="blog"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>Blogs</h2>
                </Link> */}
                <Link
                  to="contact"
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                   <h2 className='cursor-pointer dark:text-white '>Contact</h2>
                </Link>
      </div>
     }
    </header>
  )
}

export default Navbar