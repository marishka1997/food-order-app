import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
return [
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
  `assets/khinkali/kalakuri-khinkali.jpg`,
]
  }
}
