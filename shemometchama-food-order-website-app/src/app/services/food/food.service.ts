import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Kalakuri Khinkali',
        cookTime: '30-40',
        price: 10,
        favourite: false,
        origins: ['Georgia'],
        star: 4.5,
        imageUrl: `assets/kalakuri-khinkali.jpg`,
        tags: ['Khinkali'],
      },
      {
        id: 2,
        name: 'Kalakuri Khinkali',
        cookTime: '30-40',
        price: 10,
        favourite: false,
        origins: ['Georgia'],
        star: 3.2,
        imageUrl: `assets/kalakuri-khinkali.jpg`,
        tags: ['Khinkali'],
      },

      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
      // `assets/khinkali/kalakuri-khinkali.jpg`,
    ];
  }
}
