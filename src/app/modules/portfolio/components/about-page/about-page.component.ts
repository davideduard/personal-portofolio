import { Component, Output } from '@angular/core';

@Component({
	selector: 'app-about-page',
	template: `<app-portfolio-layout
		[animatedFrame]="true"
		(sendAnimationStatus)="receiveAnimationStatus($event)"
	>
		<h1 [ngClass]="animationPlayed ? 'title animated' : 'title'">
			David Eduard
		</h1>
		<h3 [ngClass]="animationPlayed ? 'subtitle animated' : 'subtitle'">
			Web Developer & Designer
		</h3>
		<div class="description-container">
			<p [ngClass]="animationPlayed ? 'year-animated' : 'year'">
				Born in 2002.
			</p>
			<p [ngClass]="animationPlayed ? 'location-animated' : 'location'">
				Romania.
			</p>
			<br />
			<p [ngClass]="animationPlayed ? 'quote-animated' : 'quote'">
				I believe a strong design isn't about what you can add, but about having
				nothing left to remove.
			</p>
		</div>
	</app-portfolio-layout>`,
	styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
	animationPlayed: boolean = false;

	receiveAnimationStatus(status: boolean) {
		this.animationPlayed = status;
	}
}
