import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent{
  
  name: string = "" 
  card: string = ""
  artist: string = ""

  constructor(private route: ActivatedRoute, public http: HttpClient) {
    
    this.route.paramMap.subscribe(this.getRouterParam);

  }
 
  //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
  
    this.http.get('https://api.pokemontcg.io/v2/cards/'+ uri_param).subscribe(a=>{
      console.log(a);
      //@ts-ignore
      this.name = a.data.name
      //@ts-ignore
      this.card = a.data.images.small
      //@ts-ignore
      this.artist = a.data.artist

        
      })

  
    }
  
  }

