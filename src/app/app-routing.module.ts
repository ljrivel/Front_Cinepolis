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
    path: 'compra-comida',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
