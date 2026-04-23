import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBadge, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { Storage } from '@ionic/storage-angular';
import { ConsoleModel } from '../models/console.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBadge, IonButton, IonIcon],
})
export class Tab3Page {

  favourites: ConsoleModel[] = [];

  constructor(private storage: Storage) {
    addIcons({ trash });
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.favourites = await this.storage.get('favourites') || [];
  }

  async removeFavourite(id: number) {
    this.favourites = this.favourites.filter(f => f.id !== id);
    await this.storage.set('favourites', this.favourites);
  }
}