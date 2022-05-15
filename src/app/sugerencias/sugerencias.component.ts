import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  misHeroes: Heroe[] = [];
  i: string=''
  miheroe: Heroe={
    nombre:"",
    bio:"",
    img:"",
    aparicion:"",
    casa:""
  }

  constructor( private heroeService: HeroeService, private activatedRoute: ActivatedRoute) {
    this.miheroe = this.heroeService.getUnHeroe(1);
  }


  ngOnInit(): void {
    

  }

}
