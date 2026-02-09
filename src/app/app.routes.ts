import { Routes } from '@angular/router';
import { introGuard } from './guards/intro-guard';
import { authGuard } from './guards/auth-guard';
import { RegisterPage } from './registro/register.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage),
    canActivate: [introGuard, authGuard]
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () =>
      import('./intro/intro.page').then(m => m.IntroPage)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/register.page').then( m => m.RegisterPage)
  },
];
