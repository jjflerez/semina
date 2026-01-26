import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage';

export const introGuard: CanActivateFn = async (): Promise<boolean | UrlTree> => {
  const storage = inject(StorageService);
  const router = inject(Router);

  console.log('introGuard ejecutándose...');

  const introVisto = await storage.get('introVisto');
  console.log('introVisto:', introVisto);

  if (!introVisto) {
    console.log('No se ha visto intro, devolviendo UrlTree a /intro');
    return router.parseUrl('/intro');  // Redirige a intro si no se ha visto
  }

  console.log('Intro vista, permitiendo acceso a /home');
  return true;  // Permite pasar a home
};
