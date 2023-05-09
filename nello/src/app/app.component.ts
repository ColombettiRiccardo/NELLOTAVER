import { Pokemon, Tcg_data } from './models/pokemon.models';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nello';
  data! : Pokemon;
  loading!: boolean;
  o = new Observable<Tcg_data>;
  constructor(public http: HttpClient) {}




   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/gym2-2');
     this.o.subscribe(this.getData);
   }
   getData = (d : Tcg_data) =>
   {
     this.data = d.data;
     this.loading = false;
   }
}

