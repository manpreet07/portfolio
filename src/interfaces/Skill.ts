export type SkillType =
  | "programming language"
  | "web development"
  | "database management"
  | "cloud & devops";

export interface Skill {
  name: string;
  to: string;
  src: string;
  skillType: SkillType;
}
