import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VenasaurComponent } from './venasaur/venasaur.component';
import { BlastoiseComponent } from './blastoise/blastoise.component';
import { CharizardComponent } from './charizard/charizard.component';

@NgModule({
  declarations: [
    AppComponent,
    VenasaurComponent,
    BlastoiseComponent,
    CharizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
