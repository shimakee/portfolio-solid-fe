import { Show } from "solid-js";
import { Skill } from "../../dataTypes";
import { sanitize } from "isomorphic-dompurify";
import { toHTML } from "@portabletext/to-html";

interface SkillComponentProps {
  skill: Skill;
}

const SkillComponent = (props: SkillComponentProps) => {
  return (
    <div>
      <Show when={props.skill.image}>
        <img src={props.skill.image} alt={props.skill.title} />
      </Show>
      <h3>{props.skill.title}</h3>
      <h5>{props.skill.type}</h5>

      <p innerHTML={sanitize(toHTML(props.skill.description))} />
    </div>
  );
};

export default SkillComponent;
