import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from '../pipes/imagen-pipe';
import { ParesPipe } from './pares-pipe';
import { FiltroImagenPipe } from './filtro-imagen-pipe';


@NgModule({
  declarations: [
  ],
  exports: [
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe
  ],
  imports: [
    CommonModule,
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe
  ]
})
export class PipesModule { }
