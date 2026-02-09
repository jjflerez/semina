import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class RegisterPage {

  registerForm: FormGroup;
  errorMsg = '';

  constructor(private fb: FormBuilder, private router: Router) {

    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  registrar() {

    if (this.registerForm.invalid) {
      this.errorMsg = 'Completa el formulario correctamente';
      return;
    }

    const datos = this.registerForm.value;

    localStorage.setItem('usuario', JSON.stringify(datos));

    this.errorMsg = '';

    // navegar al login
    this.router.navigate(['/login']);
  }

  volverLogin() {
  this.router.navigate(['/login']);
}

}
