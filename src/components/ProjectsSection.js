import React from 'react'
import { reactProjects } from '../ProjectData/Projects'
import Project from './Project';



function ProjectsSection(ref) {


  return (
    <section id="projects">
        <div className='dark:bg-[#212121]'>
            <div>
            <h1 className="text-center font-bold text-4xl dark:text-white">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
            </div>
            s
            <div className='flex flex-col md:flex-col  gap-10   items-center justify-center  mt-10 py-10 '>
           
              {
                reactProjects && reactProjects.map((data,index)=>(
               <Project key={index} data={data} index={index}/>
                ))
              }
            </div>
            <div className='flex items-center justify-center mt-10'>
              <a target='blank' className='bg-teal-600 text-white py-1  px-3 rounded-xl' href='https://github.com/r4rishabh?tab=repositories'>View All Projects</a>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection