import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {

  @Input() heroeForCard:any = {};
  @Input() index:number = 0;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router:Router,
               private _heroesService:HeroesService ) { 
      this.heroeSeleccionado = new EventEmitter();
    }

  ngOnInit(): void {
  }

  verHeroe() {
    let index:number = 0;
    for (let i = 0; i < this._heroesService.getHeroes().length; i++) {
      if (this._heroesService.getHeroes()[i].nombre == this.heroeForCard.nombre) {
        index = i;
      }
    }
    this.heroeSeleccionado.emit(index);
  }
}