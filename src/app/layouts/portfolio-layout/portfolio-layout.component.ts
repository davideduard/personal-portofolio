import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../shared';
import { AnimationsService } from '../../services';

@Component({
	selector: 'app-portfolio-layout',
	standalone: true,
	imports: [CommonModule, NavigationComponent],
	template: `
		<div class="background-image">
			<div [ngClass]="animationPlayed ? 'animated-frame' : 'frame'">
				<div class="content">
					<ng-content></ng-content>
				</div>
				<div class="header">
					<app-navigation [animationPlayed]="animationPlayed"></app-navigation>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['./portfolio-layout.component.scss']
})
export class PortfolioLayoutComponent implements OnInit {
	@Input() animatedFrame: boolean = false;

	@Output() sendAnimationStatus: EventEmitter<boolean> =
		new EventEmitter<boolean>();

	animationPlayed: boolean = false;

	constructor(private animationsService: AnimationsService) {}

	ngOnInit(): void {
		if (this.animatedFrame) {
			this.playAnimationOnce();
		}
		window.onbeforeunload = () => {
			localStorage.clear();
		};
	}

	private playAnimationOnce(): void {
		if (
			!this.animationsService.checkIfAnimationPlayed() &&
			this.animatedFrame
		) {
			localStorage.setItem('animation-played', 'true');
			this.animationPlayed = true;
		} else {
			this.animationPlayed = false;
		}
		this.sendStatus();
	}

	sendStatus(): void {
		this.sendAnimationStatus.emit(this.animationPlayed);
	}
}
