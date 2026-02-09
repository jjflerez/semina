import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule, NavController } from "@ionic/angular";
import { Authservice } from '../services/auth';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule
  ]
})
export class LoginPage implements OnInit {

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

  constructor(
    private formBuilder: FormBuilder,
    private authService: Authservice,
    private navCtrl: NavController,
    private router: Router
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

  // LOGIN CORREGIDO
  loginUser(credentials: any) {

    if (this.loginForm.valid) {

      this.authService.loginuser(credentials.email, credentials.password)
        .then(res => {

          console.log('Login exitoso:', res);
          this.errorMessage = '';

          // 👉 Ir al Intro después de login
          this.router.navigateByUrl('/intro', { replaceUrl: true });

        })
        .catch(err => {
          this.errorMessage = 'Credenciales inválidas.';
        });

    }

  }

irRegistro(){
  console.log("CLICK FUNCIONA");
  this.router.navigate(['/registro']);
}


}
