import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioLayoutComponent } from '../../layouts';

@NgModule({
	declarations: [...fromComponents.components],
	imports: [CommonModule, PortfolioRoutingModule, PortfolioLayoutComponent]
})
export class PortfolioModule {}
