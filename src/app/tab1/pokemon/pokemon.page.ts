import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonName: any = '';
  img:any='';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.pokemonName = this.activatedRoute.snapshot.paramMap.get('name');

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+this.pokemonName).subscribe(data => {
      this.img= data.sprites.front_default;
      console.log(this.img);
    });
  }

}
