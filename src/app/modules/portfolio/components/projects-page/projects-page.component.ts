import { Component } from '@angular/core';
import { projects } from '../../constants/projects';
import { Project, Skill } from '../../types';

@Component({
	selector: 'app-projects-page',
	template: `
		<app-portfolio-layout>
			<h1 class="title">Projects</h1>
			<h3 class="subtitle">& Skills</h3>
			<div class="projects-container">
				<div
					*ngFor="let project of projects; let i = index"
					class="project"
					[attr.id]="project.id"
				>
					<div class="project-item">
						<p class="project-title" (click)="setSelectedIndex(i)">
							{{ project.title }}
						</p>
						<div
							[ngClass]="{
								arrow: selectedIndex !== i,
								'active-arrow': selectedIndex === i
							}"
							(click)="setSelectedIndex(i)"
						></div>
					</div>
					<div
						[ngClass]="{
							'project-details': selectedIndex !== i,
							'active-project-details': selectedIndex === i
						}"
					>
						<div *ngFor="let skill of project.skills" class="skill">
							<p class="skill-name">{{ skill.name }}</p>
							<div
								class="skill-level"
								[style]="'--level-width: ' + skill.level + '%'"
								[ngClass]="animate ? 'animate-fill' : ''"
							></div>
						</div>
						<div class="links-placeholder">
							<p class="links-title">GitHub Links</p>
							<div class="links">
								<a
									[href]="link.url"
									target="_blank"
									*ngFor="let link of project.links"
									>{{ link.placeholder }}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</app-portfolio-layout>
	`,
	styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
	protected readonly projects: Project[] = projects;

	selectedIndex: number = -1;
	animate: boolean = false;

	setSelectedIndex(index: number) {
		if (index === this.selectedIndex) {
			this.selectedIndex = -1;
			this.animate = false;
		} else {
			this.selectedIndex = index;
			this.animate = true;

			this.animate = false;

			setTimeout(() => {
				this.animate = true;
			}, 50);
		}
	}
}
