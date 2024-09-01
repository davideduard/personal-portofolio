import { Skill } from './skill.type';

export type Project = {
	id: string;
	title: string;
	skills: Skill[];
	links: string[];
	inProgress?: boolean;
};
