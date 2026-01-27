import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule, NavController } from "@ionic/angular" // Asegúrate que el path sea correcto
import { Authservice } from '../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class LoginPage implements OnInit {

  // Cambiado a camelCase para seguir estándares
  loginForm: FormGroup; 
  errorMessage: string = '';

  validationMessages = {
    'email': [
      { type: 'required', message: 'El email es obligatorio.' },
      { type: 'email', message: 'Ingrese un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es obligatoria.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres.' }
    ]
  };

  // ¡CORRECCIÓN AQUÍ!: Se añade private authService: Authservice
  constructor(
    private formBuilder: FormBuilder,
    private authService: Authservice,
    private navCtrl: NavController 
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  ngOnInit() {}

  loginUser(credentials: any) {
    if (this.loginForm.valid) {
      this.authService.loginuser(credentials.email, credentials.password)
        .then(res => {
          console.log('Login exitoso:', res);
          this.errorMessage = '';
          this.navCtrl.navigateForward('/home');
        })
        .catch(err => {
          //console.error('Error en login:', err);
          this.errorMessage = 'Credenciales inválidas.';
        });
    }
  }
}