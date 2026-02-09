import { Routes } from '@angular/router';
import { introGuard } from './guards/intro-guard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  
 
  {
    path: '',
    redirectTo: 'home',
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

  // 👇 ESTA ES LA QUE VAMOS A USAR
  {
    path: 'registro',
    loadComponent: () =>
      import('./registro/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./menu/menu.page').then(m => m.MenuPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then(m => m.HomePage),
        canActivate: [introGuard, authGuard]
      }
    ]
  }
];