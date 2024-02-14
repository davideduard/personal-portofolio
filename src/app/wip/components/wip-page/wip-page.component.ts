import { Component } from '@angular/core';

@Component({
	selector: 'app-wip-page',
	template: `
		<div class="absolute w-full h-full">
			<div class="relative left-1/2 -translate-x-1/2 top-10 w-fit">
				<p class="font-breathing text-2xl text-red-700">David Eduard</p>
			</div>
			<div
				class="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center flex"
			>
				<div class="w-[360px] h-10 flex flex-col justify-center items-center">
					<p
						class="font-telegraf text-center flex flex-col animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black text-[18px] sm:text-[13px]"
					>
						I am currently working on this site, please come back later!
					</p>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['./wip-page.component.scss']
})
export class WipPageComponent {}
