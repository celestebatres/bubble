import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private http: HttpClient, private router: Router
  ) {  }
  public pokemons: any = [];
  public name: any="";
  public img: any="";

  ngOnInit(){

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/').subscribe(data => {
      this.pokemons = data.results;
      console.log(this.pokemons);
    });

    this.name = "bulbasaur";

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+this.name).subscribe(data => {
      this.img= data.sprites.front_default;
      console.log(this.img);
    });
  }

  public navigateFromCode(){
    const name = 'bulbasaur'
    this.router.navigateByUrl(`pokemon/${name}`);
  }

  public sendInfo(pokemon: any){

  }


  @Input() childHeader: string = '';


}
