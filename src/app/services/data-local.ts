import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root',
})
export class DataLocal {

  peliculas: PeliculaDetalle[] = [];

  constructor(private storage: Storage,
              private toastCtrl: ToastController) {
                 this.init();

              }

              async init() {
  await this.storage.create();       // crea la base de datos
  await this.cargarFavoritos();      // ahora sí puedes leer tus datos
}

  async presentToast( message: string ) {
  const toast = await this.toastCtrl.create({
    message,
    duration: 1500
  });
  toast.present();
}

  guardarPelicula(pelicula: PeliculaDetalle) {

    let existe = false;
    let mensaje = '';

    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = 'Removida de favoritos';
    } else {
      this.peliculas.push( pelicula );
      mensaje = 'Agregada a favoritos';
    }

    this.presentToast( mensaje );

    this.storage.set('peliculas', this.peliculas);

    return !existe;
  }

  async cargarFavoritos() {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id: string | number ) {
    console.log(id);
    id = Number(id);
    console.log(id);

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );

    return (existe) ? true : false;
  }



}
