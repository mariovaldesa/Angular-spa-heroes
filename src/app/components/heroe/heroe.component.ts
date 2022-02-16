import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router
               ) {
    
    this.activatedRoute.params.subscribe( (params) => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
   }

  verHeroes() {
    this.router.navigate(['heroes']);
  }

}
