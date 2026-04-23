export type Platform = 'ds' | '3ds';

export interface ConsoleModel {
  id: number;
  name: string;
  wikiTitle: string;
  releaseDate: string;
  price: string;
  colour: string;
  screenSize: string;
  cpu: string;
  ram: string;
  battery: string;
  predecessor: string;
  launchGame: string;
  unitsSold: string;
  platform: Platform;
  themeColor: string;
  themeContrast: string;
  image: string;
  funFacts: string[];
  history: string;
  improvements: string;
}

export interface RawgGame {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  platforms: { platform: { id: number; name: string } }[];
}

export interface RawgResponse {
  count: number;
  results: RawgGame[];
}