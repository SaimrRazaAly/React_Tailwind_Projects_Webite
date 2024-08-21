import React from 'react'

const SectionHeading = ({suptitle,title,para}) => {
  return (
   <>
   <div className="text-center max-w-[90%] m-auto mt-4  res-82:max-w-[60%]">
    <sup className='text-bright-navy-blue font-extrabold tracking-widest uppercase'>{suptitle}</sup>
    <h2 className='text-[2.1em] font-extrabold res-82:text-[3.5em]'>{title}</h2>
    <p>{para}</p>
   </div>
   </>
  )
}

export default SectionHeading