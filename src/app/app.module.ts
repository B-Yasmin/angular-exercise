import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';

@NgModule({
  declarations:[],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AppComponent    
  ],
  providers: [],
  bootstrap: [] 
})
export class AppModule { }
