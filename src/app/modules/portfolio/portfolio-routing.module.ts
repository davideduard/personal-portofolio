import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	AboutPageComponent,
	ContactPageComponent,
	ProjectsPageComponent
} from './components';

const routes: Routes = [
	{
		path: 'about',
		component: AboutPageComponent
	},
	{
		path: 'projects',
		component: ProjectsPageComponent
	},
	{
		path: 'contact',
		component: ContactPageComponent
	},
	{
		path: '',
		redirectTo: 'about',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PortfolioRoutingModule {}
