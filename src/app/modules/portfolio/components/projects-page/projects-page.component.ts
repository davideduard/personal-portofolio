import { Component } from '@angular/core';
import { projects } from '../../constants/projects';
import { Project } from '../../types';

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
						<p class="project-title">
							{{ project.title }}
							<span *ngIf="project.inProgress" class="opacity-30"
								>(currently developing)</span
							>
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
						<div class="skill">
							<p>Angular</p>
							<div>test</div>
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

	setSelectedIndex(index: number) {
		if (index === this.selectedIndex) {
			this.selectedIndex = -1;
		} else {
			this.selectedIndex = index;
		}
	}
}
