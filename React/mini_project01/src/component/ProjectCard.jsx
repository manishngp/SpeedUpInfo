

function ProjectCard({projectName, stack}) {
    console.log(projectName, stack);
  return (
    <div className="border border-blue-950 p-6 w-60 rounded-2xl ">
        <h2 className="text-gray-900 ">Project Name : {projectName}</h2>
        <p>Technology used</p>
        <ul>
            {
                stack.map((ele, i)=>(
                    <li key={i}>{ele}</li>
                ))
            }

        </ul>
    </div>
  )
}

export default ProjectCard