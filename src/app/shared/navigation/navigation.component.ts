import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-navigation',
	standalone: true,
	imports: [CommonModule],
	template: ` <p class="rotate-90">navigation works!</p> `,
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {}
