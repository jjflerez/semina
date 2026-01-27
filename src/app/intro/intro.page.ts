import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage';


interface IntroSlide {
title: string;
subtitle: string;
}


@Component({
selector: 'app-intro',
templateUrl: './intro.page.html',
styleUrls: ['./intro.page.scss'],
standalone: true,
imports: [IonicModule, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  
  currentIndex = 0;

  slides = [
    { title: 'Bienvenido', subtitle: 'Descubre música sin límites' },
    { title: 'Explora', subtitle: 'Encuentra tus artistas favoritos' },
    { title: 'Disfruta', subtitle: 'Playlists hechas para ti' },
    { title: 'Empieza', subtitle: 'La música te espera' }
  ];

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit() {}

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  async goBack() {
    await this.storageService.set('introVista', true);
    this.router.navigate(['/home']);
  }
}

