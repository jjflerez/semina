// guards/auth.guard.ts
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage';

export const authGuard: CanActivateFn = async (): Promise<boolean | UrlTree> => {
  const storage = inject(StorageService);
  const router = inject(Router);

  // [tarea]: validar si estoy logeada
  const isLogged = await storage.get('login');
console.log('Estado del login en storage:', isLogged);

  if (isLogged === true) {
    return true; // Permitir entrada al home
  }

  // Si no está logeada, redirigir al login
  return router.parseUrl('/login');
};