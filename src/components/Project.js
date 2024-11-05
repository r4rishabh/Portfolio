import React from 'react'

function Project({data,index}) {
  return (
    <section  className={`w-[90%] flex flex-col md:flex-row items-center px-10 py-2 md:py-0 text-gray-600 body-font border border-black-100 rounded-md shadow-xl dark:bg-white ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
    <img className="md:w-[55%] object-cover object-center rounded " alt="hero" src={data.image}/>
    <div className="md:w-[45%] lg:flex-grow  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data.name}</h1>
         <p className="mb-8 leading-relaxed">{data.description}</p>

         <div className='flex items-center gap-10 justify-between py-2 px-1'>
              <a target='blank' className='bg-teal-600 text-white  px-2 rounded-xl' href={data.githubLink}>Github</a>
              {data.liveLink && <a target='blank' className='bg-teal-600 text-white  px-2 rounded-xl' href={data.liveLink}>Live Link</a>}
         </div>
    </div>
</section>
  )
}

export default Project