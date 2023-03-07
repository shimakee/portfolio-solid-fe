import { Project } from "../../dataTypes";

interface ProjectComponentProps {
  project: Project;
}

const ProjectComponent = (props: ProjectComponentProps) => {
  return (
    <div>
      <h3>{props.project.title}</h3>
    </div>
  );
};

export default ProjectComponent;
