/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  private currentUser = new Subject<boolean>();

  constructor(private http: HttpClient){}

  setUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
    this.currentUser.next(data);
  }

  getsactor(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/getsactor');
  }

  getspelicula(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/getspelicula');
  }

  getsCartelera(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/getcartelera');
  }

  getscomida(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/getsproducto');
  }

  getpelicula(id: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/GetPelicula',{
      id,
    });

  }

  getproducto(Usuario: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/getproducto',{
      Usuario,
    });

  }
  createUser(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/insertUsuario', user);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/registerUsuario', user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/deleteUser', {
      id,
    });
  }

  deletePelicula(id: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/deletePelicula', {
      id,
    });
  }

  deleteProducto(Usuario: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/deleteproducto', {
      Usuario,
    });
  }

  changeUser(data: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/changeUser',data);
  }

  changeProducto(data: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/changeproducto',data);
  }

  changePelicula(data: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/changePelicula',data);
  }

  createPelicula(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/insertpelicula', user);
  }

  createProducto(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/insertproducto', user);
  }

  login(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/Login', user);
  }

  getUserLogin(Usuario: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/GetUserLogin',Usuario);
  }

  getUser(Usuario: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/GetUser', {
      Usuario
    });
  }

  getUsers(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/GetUsers');
  }
}
