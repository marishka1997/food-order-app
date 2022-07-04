import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }



  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 58 },
      { name: 'Hot dishes', count: 15},
      { name: 'Khinkali', count: 6},
      { name: 'Cold dishes', count: 4},
      { name: 'Salads', count: 5},
      { name: 'Pastry', count: 8},
      { name: 'Fish', count: 3},
      { name: 'Soups', count: 5},
      { name: 'Sauce', count: 3},
      { name: 'Cold drinks', count: 4},
      { name: 'Alcohol drinks', count: 5}
    ]
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
