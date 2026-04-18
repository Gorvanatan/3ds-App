import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoleDataService {

  private jsonUrl = 'assets/3ds-models.json';
  private rawgApiKey = 'b08169b7f25e483b865115db131145ac';
  private rawgBaseUrl = 'https://api.rawg.io/api';

  constructor(private http: HttpClient) {}

  getAllConsoles(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getGamesForPlatform(platform: string): Observable<any> {
    const platformId = platform === 'ds' ? 9 : 8;
    return this.http.get(`${this.rawgBaseUrl}/games?key=${this.rawgApiKey}&platforms=${platformId}&ordering=-metacritic&page_size=10&metacritic=70,100`);
  }
}