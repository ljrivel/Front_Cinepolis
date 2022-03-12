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

  getpelicula(id: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/GetPelicula',{
      id,
    });
  }

  createUser(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/insertUsuario', user);
  }

  login(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/Login', user);
  }

  getUser(user: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/GetUser', user);
  }
}
