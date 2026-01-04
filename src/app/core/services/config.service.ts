import { Injectable, signal, WritableSignal } from '@angular/core';
import { Config } from '../interfaces/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {
    this.http.get('assets/configuracion.json').toPromise().then(res => {
      (res as Config) && this.configuracion.set(res as Config);
    })
   }

  configuracion:WritableSignal<Config> = signal({
    costoEnvio: 0,
    diasVencimientoCarrito: 100
  });
}
