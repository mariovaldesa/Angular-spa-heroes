import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
})
export class FinderComponent implements OnInit {

  heroes:any[] = [];
  finderText:string = '';

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private router:Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.finderText = params['text'];
      this.heroes = this._heroesService.buscarHeroes(params['text']);
    })
   }

  ngOnInit(): void {
  }

  verHeroe( idx:number ) {
    this.router.navigate( ['heroe', idx] );
  }
}
