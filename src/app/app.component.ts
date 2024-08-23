import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: ` <app-wip-page-container *ngIf="wip"></app-wip-page-container>
		<router-outlet *ngIf="!wip"></router-outlet>`,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Portfolio';
	wip: boolean = false;
}
