import { Injectable, inject } from '@angular/core';
import { StorageService } from '../services/storage'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  // Inyectamos las dependencias necesarias
  private storage = inject(StorageService);
  private router = inject(Router);

  constructor() { }

  async loginuser(email: string, password: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      if (email === 'jose@gmail.com' && password === 'admin32*') {
        
        await this.storage.set('login', true);
        
        console.log('Sesión guardada en storage');
        resolve("Login correcto");
      } else {
        reject("Login incorrecto");
      }
    });
  }

  // Método extra para cerrar sesión
  async logout() {
    await this.storage.remove('login');
    this.router.navigate(['/login']);
  }
}