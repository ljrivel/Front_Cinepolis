import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'comida',
    loadChildren: () => import('./pages/comida/comida.module').then( m => m.ComidaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pelicula/:id',
    loadChildren: () => import('./pages/pelicula/pelicula.module').then( m => m.PeliculaPageModule)
  },
  {
    path: 'comprar',
    loadChildren: () => import('./pages/comprar/comprar.module').then( m => m.ComprarPageModule)
  },
  {
    path: 'compra-comida/:id',
    loadChildren: () => import('./pages/compra-comida/compra-comida.module').then( m => m.CompraComidaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cantidad-tickets/:id',
    loadChildren: () => import('./pages/cantidad-tickets/cantidad-tickets.module').then( m => m.CantidadTicketsPageModule)
  },
  {
    path: 'crearpelicula',
    loadChildren: () => import('./pages/crearpelicula/crearpelicula.module').then( m => m.CrearpeliculaPageModule)
  },
  {
    path: 'crearcomida',
    loadChildren: () => import('./pages/crearcomida/crearcomida.module').then( m => m.CrearcomidaPageModule)
  },
  {
    path: 'modificarpeli/:id',
    loadChildren: () => import('./pages/modificarpeli/modificarpeli.module').then( m => m.ModificarpeliPageModule)
  },
  {
    path: 'modificarcomida/:id',
    loadChildren: () => import('./pages/modificarcomida/modificarcomida.module').then( m => m.ModificarcomidaPageModule)
  },
  {
    path: 'infocomida/:id',
    loadChildren: () => import('./pages/infocomida/infocomida.module').then( m => m.InfocomidaPageModule)
  },
  {
    path: 'cantidadcomida/:id',
    loadChildren: () => import('./pages/cantidacomida/cantidacomida.module').then( m => m.CantidacomidaPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'crearclientes',
    loadChildren: () => import('./pages/crearclientes/crearclientes.module').then( m => m.CrearclientesPageModule)
  },
  {
    path: 'modificar-cliente/:id',
    loadChildren: () => import('./pages/modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)
  },
  {
    path: 'seleccionaragregar',
    loadChildren: () => import('./pages/seleccionaragregar/seleccionaragregar.module').then( m => m.SeleccionaragregarPageModule)
  },
  {
    path: 'agregar-cartelera/:id',
    loadChildren: () => import('./pages/agregar-cartelera/agregar-cartelera.module').then( m => m.AgregarCarteleraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
