import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaceInvadersComponent } from './space-invaders/space-invaders.component';

@NgModule({
  declarations: [AppComponent, SpaceInvadersComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
