import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  obtenerUsuarios(sala_id?) {

    let query = '?';

    if (sala_id) {
      query += `id=${sala_id}`
    }

    console.log(query)

    return this.http.get(`${this.url}/usuarios${query}`)
  }

  agregarUsuario(body) {
    return this.http.post(`${this.url}/usuarios`,body)
  }


}
