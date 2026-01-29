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
    { 
      title: 'Bienvenido', 
      subtitle: 'Descubre música sin límites.',
      image: 'assets/imgs/music.jpg',
      color: '#fa243c' // Rojo Apple Music
    },
    { 
      title: 'Explora', 
      subtitle: 'Encuentra tus artistas favoritos en alta fidelidad.',
      image: 'assets/imgs/slide2.jpg',
      color: '#af40ff'
    },
    { 
      title: 'Elige tu estilo', 
      subtitle: 'escucha tu música favorita.',
      image: 'assets/imgs/slide3.jpg',
      color: '#007aff'
    },
    { 
      title: 'Empieza', 
      subtitle: 'La música te espera. Crea tu propio mundo.',
      image: 'assets/imgs/slide3.jpg',
      color: '#007aff'
    }
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
    await this.storageService.set('introVisto', true);
    this.router.navigate(['/home']);
  }
}

