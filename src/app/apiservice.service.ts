import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {

  constructor(private http: HttpClient){}

  getsactor(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/getsactor');
  }

  getspelicula(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/getspelicula');
  }

  createUser(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/insertUsuario', user);
  }

  login(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/Login', user);
  }

}
