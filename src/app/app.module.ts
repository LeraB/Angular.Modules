import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomHoverModule } from './modules/custom-hover/custom-hover.module';
import { CustomPipeModule } from './modules/custom-pipe/custom-pipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomHoverModule,
    CustomPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
