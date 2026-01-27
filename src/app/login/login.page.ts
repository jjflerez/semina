import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule } from  "@ionic/angular"
;

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

  Loginform: FormGroup;
  validaton_messages = {
    'email': [
      { type: 'required', message: 'El email es obligatorio.' },
      { type: 'email', message: 'Ingrese un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es obligatoria.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres.' }
    ]
  };

  constructor(private formbuilder: FormBuilder) {
    this.Loginform = this.formbuilder.group({
      email: new FormControl(
        '',
        [Validators.required, 
          Validators.email]
      ),
      password: new FormControl(
        '',
        [Validators.required,
          Validators.minLength(6)
        ]
      )
    });
  }

  ngOnInit() {
  }

  loginuser (credentials: any) {
    console.log(credentials);
  }
}
