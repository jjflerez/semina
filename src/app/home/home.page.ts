import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StorageService } from '../services/storage';
import { Router } from '@angular/router'; // 👈 agregado

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {

  colorclaro = 'var(--color-claro)';
  coloroscuro = 'var(--color-oscuro)';
  coloractual = this.coloroscuro;

  temaOscuro = false;

  constructor(
    private storageservice: StorageService,
    private router: Router
  ) {}

  async ngOnInit() {}

  cambiarTema() {
    this.temaOscuro = !this.temaOscuro;
    document.documentElement.style.setProperty(
      '--slide-bg',
      this.temaOscuro
        ? 'var(--slide-color-oscuro)'
        : 'var(--slide-color-claro)'
    );
    document.documentElement.style.setProperty(
      '--slide-text',
      this.temaOscuro
        ? 'var(--slide-text-oscuro)'
        : 'var(--slide-text-claro)'
    );
  }

  genres = [
    {
      Title: 'Musica Clasica',
      Image: 'https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0',
      Description: 'La música clásica es un género musical que abarca un amplio período de tiempo y se caracteriza por su complejidad estructural y riqueza armónica. Compositores como Mozart, Beethoven y Bach son figuras destacadas de este género',
    },
    {
      Title: 'Salsa',
      Image: 'https://static.vecteezy.com/system/resources/thumbnails/023/139/989/small/abstract-illustration-featuring-trumpet-and-colored-ornaments-ai-generated-photo.jpg',
      Description:'La salsa musical tiene sus raíces en la fusión de ritmos afrocubanos como el Son Cubano, Mambo y Cha-cha-chá, enriquecidos con Jazz y otros estilos, naciendo en Cuba pero consolidándose y popularizándose globalmente en Nueva York a finales de los años 60 y 70, gracias a la inmigración cubana y puertorriqueña, y a músicos que la bautizaron con este nombre comercial para englobar estos sonidos caribeños. ',
    },
    {
      Title: 'Vallenato',
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOilHWC40h1AJHs-n7ekkba9d8MyRMnAqGrg&s',
      Description: 'El vallenato nació en la región Caribe de Colombia, especialmente en Valledupar, como una fusión de culturas: cantos de vaqueros, ritmos africanos (tambores) e indígenas (guacharaca), y la llegada del acordeón europeo a mediados del siglo XIX. Originalmente, los juglares o "vallenateros" cantaban historias de la vida cotidiana, el amor y las leyendas locales.',
    }
  ];

  async Cambiarcolor() {
    this.coloractual =
      this.coloractual === this.coloroscuro ? this.colorclaro : this.coloroscuro;

    await this.storageservice.set('tema', this.coloractual);
    console.log('Tema guardado:', this.coloractual);
  }

  async loadstorage() {
    const temaGuardado = await this.storageservice.get('tema');
    if (temaGuardado) {
      this.coloractual = temaGuardado;
      console.log('Tema cargado:', this.coloractual);
    }
  }

  // ✅ ÚNICA FUNCIÓN NUEVA (NO afecta nada)
  irAIntro() {
    this.router.navigate(['/intro']);
  }
}
