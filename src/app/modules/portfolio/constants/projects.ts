import { Project } from '../types';

export const projects: Project[] = [
	{
		id: 'trading-companion',
		title: 'CSGOEmpire Trading Companion',
		skills: [
			{
				name: 'Angular & Typescript',
				level: 66
			},
			{
				name: 'Tailwind',
				level: 58
			},
			{
				name: 'Java Spring Boot & Security',
				level: 36
			}
		],
		links: [
			'https://github.com/davideduard/CSGOEmpire-Trading-Companion-BE',
			'https://github.com/davideduard/CSGOEmpire-Trading-Companion-WEB'
		],
		inProgress: true
	},
	{
		id: 'interviewr',
		title: 'InterViewR',
		skills: [
			{
				name: 'Angular & Typescript',
				level: 55
			},
			{
				name: 'Tailwind',
				level: 42
			}
		],
		links: [
			'https://github.com/davideduard/interViewR-backend',
			'https://github.com/davideduard/interViewR-web'
		]
	},
	{
		id: 'text-brief',
		title: 'TextBrief - A Summarization Tool for Romanian Language',
		skills: [
			{
				name: 'Natural Language Processing',
				level: 16
			},
			{
				name: 'Angular & Typescript',
				level: 40
			},
			{
				name: 'Python',
				level: 35
			}
		],
		links: ['https://github.com/davideduard/TextBrief']
	},
	{
		id: 'social-network',
		title: 'Social Network Application',
		skills: [
			{
				name: 'Java',
				level: 30
			},
			{
				name: 'JavaFX',
				level: 15
			}
		],
		links: ['https://github.com/davideduard/Social-Network']
	},
	{
		id: 'scrapping-bot',
		title: 'Web Scrapping Bot',
		skills: [
			{
				name: 'Python',
				level: 20
			}
		],
		links: ['https://github.com/davideduard/Scrapping-Bot']
	},
	{
		id: 'library-app',
		title: 'Library application',
		skills: [
			{
				name: 'C#',
				level: 10
			}
		],
		links: ['https://github.com/davideduard/Gestiunea-unei-biblioteci']
	}
];
