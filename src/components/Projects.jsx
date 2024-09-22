import AIProjectSection from "./AIProjectSection";

const Projects = () => (
    <section id="projects" className="py-16 bg-black drop-shadow-xl">
      <div className="flex w-full h-[70vh]"> {/* Adjusted height here */}
        
        {/* Image on the left */}
        <img
          src="/path/to/your-image.jpg"
          alt="fancy image for vibes"
          className="w-[25vw] h-full object-cover rounded-md mr-6 bg-slate-400 mx-7"
        />
        
        <AIProjectSection/>

        
      </div>
    </section>
  );
  
  export default Projects;
  