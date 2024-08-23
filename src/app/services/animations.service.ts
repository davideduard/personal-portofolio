import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AnimationsService {
	constructor() {}

	public checkIfAnimationPlayed(): boolean {
		return localStorage.getItem('animation-played') === 'true';
	}
}
