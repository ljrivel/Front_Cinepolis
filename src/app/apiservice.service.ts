import { AgregarCarteleraPage } from './pages/agregar-cartelera/agregar-cartelera.page';
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {


  constructor(private http: HttpClient){}


  //localstorage
  setUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  setCartelera(data: any) {
    localStorage.setItem('id', JSON.stringify(data));
  }

  setProductos(data: any) {
    localStorage.setItem('compras', JSON.stringify(data));
  }


  resetAll() {
    localStorage.setItem('compras', JSON.stringify([]));
    localStorage.setItem('cantidadtickets', JSON.stringify([]));
  }

  resetCantidadTickets(){
    localStorage.setItem('cantidadtickets', JSON.stringify([]));
  }

  setCantidadTickets(data: any) {
    localStorage.setItem('cantidadtickets', JSON.stringify(data));
  }

  //Api

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


  AgregarCartelera(Usuario: any): Observable<any> {
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/addcartelera',Usuario);
  }

  getUsers(): Observable<any> {
    return this.http.get('https://nodejs-api-cinepolis.herokuapp.com/GetUsers');
  }

  getAsientosLibres(id: any): Observable<any>{
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/asientoslibres',{
      id
    });
  }

  getAsientos(id: any): Observable<any>{
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/asientosCartelera',{
      id
    });
  }

  getHistorial(id: any): Observable<any>{
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/getHistorial',{
      id
    });
  }

  getCompra(id: any): Observable<any>{
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/getCompra',{
      id
    });
  }

  ComprarProductos(id: any,precio: any,productos: any,cantidad: any,pdf: any): Observable<any>{
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/compraproductos',{
      id,
      precio,
      productos,
      cantidad,
      pdf
    });
  }

  ComprarBoletos(idU: any, idC: any,precio: any,boletos: any,cantidad: any,pdf: any): Observable<any>{
    return this.http.post('https://nodejs-api-cinepolis.herokuapp.com/compraboletos',{
      idU,
      idC,
      precio,
      boletos,
      cantidad,
      pdf
    });
  }
}
