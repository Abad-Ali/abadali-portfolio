import { projects } from "../projectsData"
import { notFound } from "next/navigation"
import ProjectnameClient from "./ProjectnameClient"

const Projectpage = async({ params }) => {
  const { projectname } =  await params

  const project = projects.find(
    (p) => p.id === projectname
  )

  if (!project) notFound()
  return (
    <ProjectnameClient project={project}/>
  )
}

export default Projectpage