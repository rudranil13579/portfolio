
const AIProjectSection = () =>(
     
<div className="flex flex-col h-full w-[50vw] bg-slate-600 rounded-3xl p-4 overflow-hidden items-center mx-28">
    {/* First Project Row */}
    <div className="flex items-center justify-between bg-slate-300 h-[23%] w-[90%] my-4 p-4">
        <div>
            <h3 className="text-xl font-bold">Project Title 1</h3>
            <p>This is a description of Project 1.</p>
        </div>
        <img src="/path/to/image1.jpg" alt="Project 1" className="w-1/3 h-auto rounded-md" />
    </div>
    
    {/* Second Project Row */}
    <div className="flex items-center justify-between bg-slate-300 h-[23%] w-[90%] my-4 p-4">
        <div>
            <h3 className="text-xl font-bold">Project Title 2</h3>
            <p>This is a description of Project 2.</p>
        </div>
        <img src="/path/to/image2.jpg" alt="Project 2" className="w-1/3 h-auto rounded-md" />
    </div>

    {/* Third Project Row */}
    <div className="flex items-center justify-between bg-slate-300 h-[23%] w-[90%] my-4 p-4">
        <div>
            <h3 className="text-xl font-bold">Project Title 3</h3>
            <p>This is a description of Project 3.</p>
        </div>
        <img src="/path/to/image3.jpg" alt="Project 3" className="w-1/3 h-auto rounded-md" />
    </div>

    <div className="flex items-center justify-between bg-slate-300 h-[23%] w-[90%] my-4 p-4">
        <div>
            <h3 className="text-xl font-bold">Project Title 3</h3>
            <p>This is a description of Project 3.</p>
        </div>
        <img src="/path/to/image3.jpg" alt="Project 3" className="w-1/3 h-auto rounded-md" />
    </div>
</div>



);

export default AIProjectSection