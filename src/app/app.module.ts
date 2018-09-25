import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    //environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

