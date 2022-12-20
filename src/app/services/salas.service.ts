import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  url: any = environment.url;

  constructor(private http: HttpClient) { }

  obtenerListado(sala_id?) {
    return this.http.get(`${this.url}/salas`);
  }

  obtenerSalaId(id) {
    return this.http.get(`${this.url}/salas/${id}`);
  }

  agregar(body) {
    return this.http.post(`${this.url}/salas`,body)
  }

  eliminarSala(id) {
    return this.http.delete(`${this.url}/salas/${id}`)
  }

}
