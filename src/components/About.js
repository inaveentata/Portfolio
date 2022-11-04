import naveenImage from '../assets/crop_Naveen.jpg'
const About = () => {
  return (
    <section id="about" className="border-b-2 max-w-screen-xl lg:mx-auto p-4 ">
      <h2 className="mt-2 mb-4 text-4xl ">About</h2>
      <div className="flex flex-col items-center md:flex-row">
        <img
          src={naveenImage}
          alt="profile"
          className="rounded-full w-[310px] h-[310px]"
        />
        <div className=" md: px-5 max-w-2xl mx-auto text-center md:text-start">
          <h1 className="text-5xl ">Naveen Tata</h1>
          <p className="text-2xl">FrontEnd Web Developer</p>
          <p className="mt-3 md:mt-6 md:text-[18px]">
            I am Naveen Tata, a self-taught front-end web developer,
            detail-oriented professional with excellent communication,
            interpersonal and creative thinking skills. Aiming to leverage my
            abilities that can successfully contribute to the company's growth
            as well as enhance my knowledge and exploring new things.
            {/* ----- */}I can be relied upon to help your company/firm achieve
            its goals and currently looking for an entry-level opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}; 

export default About;
