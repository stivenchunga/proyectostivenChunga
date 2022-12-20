import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GanadorService {

  url: any = environment.url;

  constructor(private http: HttpClient) { }

  agregarSala(body) {
    return this.http.post(`${this.url}/ganador`,body)
  }

}
