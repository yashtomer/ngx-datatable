import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';



import { environment } from './../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
  providers: [
    ServerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
