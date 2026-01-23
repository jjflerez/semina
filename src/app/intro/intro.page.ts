import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit() {}

  async goBack() {
    // 👉 Guardamos que ya vio la intro
    await this.storageService.set('introVista', true);
    console.log('Intro marcada como vista');

    // 👉 Volvemos al home
    this.router.navigate(['/home']);
  }
}
