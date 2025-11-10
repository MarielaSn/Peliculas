import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { IonicModule, ModalController } from "@ionic/angular";
import { PipesModule } from 'src/app/pipes/pipes-module';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataLocal } from 'src/app/services/data-local';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  imports: [IonicModule, CommonModule, PipesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetalleComponent  implements OnInit {
  @Input() id: string = '';

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';



  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController,
               private datalocal: DataLocal) { }

  ngOnInit() {
    //console.log('ID', this.id);


    this.moviesService.getPeliculaDetalle( this.id ).subscribe( resp => {
      console.log( resp );
      this.pelicula = resp;
    });

    this.moviesService.getActoresPelicula( this.id ).subscribe( resp => {
      console.log( resp );
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.datalocal.guardarPelicula( this.pelicula )
      this.estrella = (existe) ? 'star' : 'star-outline';
  }

}
