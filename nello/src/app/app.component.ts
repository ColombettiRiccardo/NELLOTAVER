import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nello';
  data! : Pokemon;
  pic = String;
  loading!: boolean;
  o = new Observable<Object>;
  constructor(public http: HttpClient) {}


   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://api.pokemontcg.io/v2/cards/gym2-2');
     this.o.subscribe(this.getData);
   }
   getData = (d : any) =>
   {
     this.data = d["data"];
     this.loading = false;
     this.pic = String;
   }
}


