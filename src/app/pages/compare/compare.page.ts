import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonBadge } from '@ionic/angular/standalone';
import { ConsoleDataService } from '../../services/console-data.service';
import { ConsoleModel } from '../../models/console.model';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.page.html',
  styleUrls: ['./compare.page.scss'],
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonBadge],
})
export class ComparePage implements OnInit {

  consoles: ConsoleModel[] = [];
  selectedId1: number | null = null;
  selectedId2: number | null = null;
  console1: ConsoleModel | null = null;
  console2: ConsoleModel | null = null;

  specs: { label: string; key: keyof ConsoleModel }[] = [
    { label: 'Release Date', key: 'releaseDate' },
    { label: 'Price', key: 'price' },
    { label: 'CPU', key: 'cpu' },
    { label: 'RAM', key: 'ram' },
    { label: 'Screen Size', key: 'screenSize' },
    { label: 'Battery Life', key: 'battery' },
    { label: 'Colours', key: 'colour' },
    { label: 'Launch Game', key: 'launchGame' },
    { label: 'Predecessor', key: 'predecessor' },
    { label: 'Units Sold', key: 'unitsSold' },
  ];

  constructor(private consoleDataService: ConsoleDataService) {}

  ngOnInit() {
    this.consoleDataService.getAllConsoles().subscribe(data => {
      this.consoles = data;
    });
  }

  onSelectChange() {
    this.console1 = this.consoles.find(c => c.id === Number(this.selectedId1)) || null;
    this.console2 = this.consoles.find(c => c.id === Number(this.selectedId2)) || null;
  }
}