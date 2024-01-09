import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
