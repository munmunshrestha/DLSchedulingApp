import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//jqwidget
import { jqxBarGaugeModule }    from 'jqwidgets-ng/jqxbargauge';
import{ jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';           



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    jqxSchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxBarGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
