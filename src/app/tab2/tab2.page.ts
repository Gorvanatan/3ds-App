import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { ConsoleDataService } from '../services/console-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, NgFor, NgIf, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class Tab2Page implements OnInit {

  consoles: any[] = [];
  filteredConsoles: any[] = [];
  searchTerm: string = '';

  constructor(private consoleDataService: ConsoleDataService) {}

  ngOnInit() {
    this.consoleDataService.getAllConsoles().subscribe(data => {
      this.consoles = data;
      this.filteredConsoles = data;
    });
  }

  filterConsoles() {
    this.filteredConsoles = this.consoles.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}