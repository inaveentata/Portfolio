import React from 'react'
import NaveenResume from '../assets/Naveen_Tata.pdf'

const Resume = () => {
  return (
    <section id="resume" className="max-w-screen-xl lg:mx-auto p-4 h-full ">
      <h2 className="mt-2 mb-4 text-4xl ">Resume</h2>
      {/* <iframe
        src={`${NaveenResume}#view=fitH`}
        title="resume"
        width="100%"
        height="1230px" 
      /> */}
      <button className="border-[1px] border-sky-400 px-3 ">
        <a target="_blank" rel="noreferrer" href={NaveenResume}>
          Download Resume
        </a>
      </button>
    </section>
  );
}

export default Resume