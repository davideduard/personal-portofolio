import { Component } from '@angular/core';

@Component({
	selector: 'app-wip-page',
	template: `
		<div class="absolute w-full h-full">
			<div
				class="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center flex"
			>
				<p>I am currently working on this site, please come back later!</p>
			</div>
		</div>
	`,
	styleUrls: ['./wip-page.component.scss']
})
export class WipPageComponent {}
