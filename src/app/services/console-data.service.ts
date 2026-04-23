import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ConsoleModel, RawgResponse, Platform } from '../models/console.model';

@Injectable({
  providedIn: 'root'
})
export class ConsoleDataService {

  private readonly DS_PLATFORM_ID = 9;
  private readonly THREEDS_PLATFORM_ID = 8;

  constructor(private http: HttpClient) {}

  getAllConsoles(): Observable<ConsoleModel[]> {
    return this.http.get<ConsoleModel[]>(environment.consolesJsonUrl);
  }

  getGamesForPlatform(platform: Platform): Observable<RawgResponse> {
    const platformId = platform === 'ds' ? this.DS_PLATFORM_ID : this.THREEDS_PLATFORM_ID;
    const url = `${environment.rawgBaseUrl}/games`
      + `?key=${environment.rawgApiKey}`
      + `&platforms=${platformId}`
      + `&ordering=-metacritic`
      + `&page_size=10`
      + `&metacritic=70,100`;
    return this.http.get<RawgResponse>(url);
  }
}