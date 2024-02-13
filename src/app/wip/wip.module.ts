import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import * as fromContainers from './containers';

import { WIPRoutingModule } from './wip-routing.module';
import { WipPageContainer } from './containers';

@NgModule({
	declarations: [...fromComponents.components, ...fromContainers.containers],
	exports: [WipPageContainer],
	imports: [CommonModule, WIPRoutingModule]
})
export class WIPModule {}
