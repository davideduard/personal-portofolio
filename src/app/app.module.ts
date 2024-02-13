import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WIPModule } from './wip/wip.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, WIPModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
