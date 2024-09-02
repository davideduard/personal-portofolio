import { Skill } from './skill.type';
import { Link } from './link.type';

export type Project = {
	id: string;
	title: string;
	skills: Skill[];
	links: Link[];
	inProgress?: boolean;
};
