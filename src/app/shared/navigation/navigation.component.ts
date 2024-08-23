import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-navigation',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive],
	template: `
		<nav>
			<ul class="navigation">
				<li>
					<a
						[ngClass]="animationPlayed ? 'nav-item about' : 'nav-item'"
						routerLink="/about"
						routerLinkActive="active-route"
						>About</a
					>
				</li>
				<li>
					<a
						[ngClass]="animationPlayed ? 'nav-item projects' : 'nav-item'"
						routerLink="/projects"
						routerLinkActive="active-route"
						>Projects</a
					>
				</li>
				<li>
					<a
						[ngClass]="animationPlayed ? 'nav-item contact' : 'nav-item'"
						routerLink="/contact"
						routerLinkActive="active-route"
						>Contact</a
					>
				</li>
			</ul>
		</nav>
	`,
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	@Input() animationPlayed: boolean = false;
}
