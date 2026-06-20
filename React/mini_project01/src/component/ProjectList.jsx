import ProjectCard from "./ProjectCard";


function ProjectList({projects}) {
    console.log(projects);
  return (
    <div className="flex gap-4 flex-wrap">
        {projects.map((data, i)=>(
            <ProjectCard key={i} projectName={data.name} stack={data.techUsed} />
        ))

        }
    </div>
  )
}

export default ProjectList