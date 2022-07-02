import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
return [
{
  id: 1,
  name: 'Kalakuri Khinkali',
  cookTime: '10-20',
  price: 10,
  favourite: false,
  origins: ['georgia'],
  star: 4.5,
  imageUrl: `assets/khinkali/kalakuri-khinkali.jpg`,
  tags: ['Khinkali']
},
{
  id: 2,
  name: 'Kalakuri Khinkali',
  cookTime: '10-20',
  price: 10,
  favourite: false,
  origins: ['georgia'],
  star: 4.5,
  imageUrl: `assets/khinkali/kalakuri-khinkali.jpg`,
  tags: ['Khinkali']
}


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
