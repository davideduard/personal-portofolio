import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: ` <app-wip-page-container *ngIf="wip"></app-wip-page-container> `,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Portofolio';
	wip: boolean = true;
}
