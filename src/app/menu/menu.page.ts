import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule ]
})
export class MenuPage implements OnInit {

  constructor(private storage: Storage) { }
  
  async cerrarSesion() {
    await this.storage.clear();
  }

  ngOnInit() {
  }

}
