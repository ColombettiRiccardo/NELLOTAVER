import { Component } from '@angular/core';
import { Pokemon, Tcg_data } from '../models/pokemon.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-blastoise',
  templateUrl: './blastoise.component.html',
  styleUrls: ['./blastoise.component.css']
})
export class BlastoiseComponent {
  title = 'nello';
  //@ts-ignore
  data : Pokemon = {};
  loading!: boolean;
  o = new Observable<Tcg_data>;
  constructor(public http: HttpClient) {

    console.log("here");
    this.loading = true;
    this.o = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/base1-2');
    this.o.subscribe(this.getData);
  }

  getData = (d : Tcg_data) =>
  {
    this.data = d.data;
    this.loading = false;
  }
}
