const Projects = () => (
    <section id="projects" className="py-16 bg-white drop-shadow-xl flex justify-center">
      {/* Outer container to control width and height */}
      <div className="flex w-[60vw] h-[45vh]">
        
        {/* Image on the left */}
        <img
          src="/path/to/your-image.jpg"
          alt="fancy image for vibes"
          className="w-[25vw] h-[75vh] object-cover rounded-md mr-6 bg-slate-400"
        />
        
        {/* Project details section on the right */}
        <div className="flex-grow h-[75vh] bg-slate-600 rounded-md p-4">
          <h3 className="text-white text-xl font-bold mb-4">Project Title</h3>
          <p className="text-white">This is a placeholder for project details. Add more information here about the project.</p>
        </div>
        
      </div>
    </section>
  );
  
  export default Projects;
  