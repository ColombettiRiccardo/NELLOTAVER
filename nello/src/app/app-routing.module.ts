import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlastoiseComponent } from './blastoise/blastoise.component';
import { VenasaurComponent } from './venasaur/venasaur.component';
import { CharizardComponent } from './charizard/charizard.component';

const routes: Routes = [
  {path: "charizard", component: CharizardComponent},
  {path: "venasaur" , component: VenasaurComponent},
  {path: "blastoise" , component: BlastoiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
