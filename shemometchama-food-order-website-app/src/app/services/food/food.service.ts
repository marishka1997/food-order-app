import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
return [
  `assets/sauce/baje.webpg`,
  `assets/sauce/satsebeli.webpg`,
  `assets/sauce/tkemali.webpg`
]
  }
}
