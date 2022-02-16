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
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/getsactor');
  }



}
