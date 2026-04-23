import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton, IonIcon, IonList, IonItem, IonLabel, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, heartOutline, shareOutline } from 'ionicons/icons';
import { ConsoleDataService } from '../../services/console-data.service';
import { Storage } from '@ionic/storage-angular';
import { Share } from '@capacitor/share';
import { ConsoleModel, RawgGame } from '../../models/console.model';

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.page.html',
  styleUrls: ['./model-detail.page.scss'],
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton, IonIcon, IonList, IonItem, IonLabel, IonBackButton, IonButtons],
})
export class ModelDetailPage implements OnInit {

  console: ConsoleModel | null = null;
  games: RawgGame[] = [];
  isFavourite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private consoleDataService: ConsoleDataService,
    private storage: Storage
  ) {
    addIcons({ heart, heartOutline, shareOutline });
  }

  async ngOnInit() {
    await this.storage.create();
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.consoleDataService.getAllConsoles().subscribe(async data => {
      this.console = data.find(c => c.id === id) || null;
      if (this.console) {
        this.consoleDataService.getGamesForPlatform(this.console.platform).subscribe(response => {
          const platformId = this.console!.platform === 'ds' ? 9 : 8;
          this.games = response.results.filter(game =>
            game.platforms.some(p => p.platform.id === platformId)
          );
        });

        const favs: ConsoleModel[] = await this.storage.get('favourites') || [];
        this.isFavourite = favs.some(f => f.id === this.console!.id);
      }
    });
  }

  async toggleFavourite() {
    if (!this.console) return;
    let favs: ConsoleModel[] = await this.storage.get('favourites') || [];
    if (this.isFavourite) {
      favs = favs.filter(f => f.id !== this.console!.id);
    } else {
      favs.push(this.console);
    }
    await this.storage.set('favourites', favs);
    this.isFavourite = !this.isFavourite;
  }

  async shareConsole() {
    if (!this.console) return;
    await Share.share({
      title: this.console.name,
      text: `Check out the ${this.console.name} — released ${this.console.releaseDate} at ${this.console.price}. ${this.console.history}`,
      dialogTitle: 'Share Console Info',
    });
  }
}