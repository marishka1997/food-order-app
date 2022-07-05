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
        name: 'Pork Mtsvadi',
        cookTime: '35-45',
        price: 13.50,
        favourite: false,
        origins: ['Georgia'],
        star: 4.5,
        imageUrl: `assets/hot-dishes/pork-barbecue.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 2,
        name: 'Kalakuri Khinkali',
        cookTime: '45-55',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4.2,
        imageUrl: `assets/khinkali/kalakuri-khinkali.jpg`,
        tags: ['Khinkali'],
      },
      {
        id: 3,
        name: 'Ostri',
        cookTime: '30-40',
        price: 13,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/soups/ostri.jpg`,
        tags: ['Soups'],
      },
      {
        id: 4,
        name: 'Lazian Khachapuri',
        cookTime: '20-30',
        price: 18,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/lazian-khachapuri.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 5,
        name: 'Assorted Pkhali',
        cookTime: '20-30',
        price: 15,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/cold-dishes/assorted-pkhali.jpg`,
        tags: ['Cold dishes'],
      },
      {
        id: 6,
        name: 'Salmon in Baje',
        cookTime: '20-30',
        price: 18,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/fishy/salmon-in-baje.jpg`,
        tags: ['Fish'],
      },
      {
        id: 7,
        name: 'Assorted Cheese',
        cookTime: '20-30',
        price: 16,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/cold-dishes/assorted-cheese.jpg`,
        tags: ['Cold dishes'],
      },
      {
        id: 8,
        name: 'Mtchadi',
        cookTime: '20-30',
        price: 3,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/mtchadi.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 9,
        name: 'Caesar Salad',
        cookTime: '25-30',
        price: 16,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/salads/caesar-with-chicken.jpg`,
        tags: ['Salads'],
      },
      {
        id: 10,
        name: 'Khinkali with Mushrooms',
        cookTime: '25-35',
        price: 8,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/khinkali/khinkali-with-mushrooms.jpg`,
        tags: ['Khinkali'],
      },
      {
        id: 11,
        name: 'Lobio Beans',
        cookTime: '35-45',
        price: 7,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/soups/lobio-beans-in-a-pot.jpg`,
        tags: ['Soups'],
      },
      {
        id: 12,
        name: 'Odjaxuri',
        cookTime: '35-45',
        price: 15,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/odjaxuri-with-pork.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 13,
        name: 'French Fries',
        cookTime: '20-30',
        price: 6,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/french-fries.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 14,
        name: 'Baje',
        cookTime: '20-30',
        price: 7.5,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/sauce/baje.jpg`,
        tags: ['Sauce'],
      },
      {
        id: 15,
        name: 'Lobiani',
        cookTime: '15-25',
        price: 9,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/lobiani.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 16,
        name: 'Cucumber & Tomato Salad',
        cookTime: '20-30',
        price: 8,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/salads/cucumber-tomato-salad.jpg`,
        tags: ['Salads'],
      },
      {
        id: 17,
        name: 'Madame Bovary',
        cookTime: '25-35',
        price: 18,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/madame-bovary.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 18,
        name: 'Chakaphuli',
        cookTime: '30-40',
        price: 18,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/soups/chakaphuli.jpg`,
        tags: ['Soups'],
      },
      {
        id: 19,
        name: 'Tkemali',
        cookTime: '20-30',
        price: 3,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/sauce/tkemali.jpg`,
        tags: ['Sauce'],
      },
      {
        id: 20,
        name: 'Abkhazura',
        cookTime: '25-35',
        price: 14,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/abkhazura.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 21,
        name: 'Catfish in Kindzmari',
        cookTime: '25-35',
        price: 20,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/fishy/catfish-in-kindzmari.jpg`,
        tags: ['Fish'],
      },
      {
        id: 22,
        name: 'Veal Mtsvadi',
        cookTime: '25-35',
        price: 18,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/veal-barbecue.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 23,
        name: 'Assorted Pickles',
        cookTime: '25-35',
        price: 8,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/cold-dishes/assorted-pickles.jpg`,
        tags: ['Cold dishes'],
      },
      {
        id: 24,
        name: 'Khinkali with Potatoes',
        cookTime: '25-35',
        price: 8,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/khinkali/khinkali-with-potatoes.jpg`,
        tags: ['Khinkali'],
      },
      {
        id: 25,
        name: 'Kakhetian shoti',
        cookTime: '25-35',
        price: 3,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/kakhetian-shoti.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 26,
        name: 'Chicken Salad',
        cookTime: '25-35',
        price: 9,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/salads/chicken-salad.jpg`,
        tags: ['Salads'],
      },
      {
        id: 27,
        name: 'Megrelian Khachapuri',
        cookTime: '25-35',
        price: 14,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/megrelian-khachapuri.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 28,
        name: 'Mushrooms on Ketsi with Sulguni',
        cookTime: '25-35',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/mushrooms-on-a-ketsi-with-sulguni.jpg`,
        tags: ['Hot dishes']
      },
      {
        id: 29,
        name: 'Megrelian Kupati',
        cookTime: '25-35',
        price: 10,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/megrelian-kupati.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 29,
        name: 'Mokhevuri Khinkali',
        cookTime: '35-45',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/khinkali/mokhevuri-khinkali.jpg`,
        tags: ['Khinkali'],
      },
      {
        id: 30,
        name: 'Chicken Liver',
        cookTime: '35-45',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/chicken-liver.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 31,
        name: 'Mexican Potatoes with sauce',
        cookTime: '25-35',
        price: 9,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/mexican-potatoes-with-sauce.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 32,
        name: 'Shkmeruli',
        cookTime: '35-45',
        price: 22,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/soups/shkmeruli.jpg`,
        tags: ['Soups'],
      },
      {
        id: 33,
        name: 'Imeretian Khachapuri',
        cookTime: '25-35',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/imeretian-khachapuri.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 34,
        name: 'Khinkali with cheese',
        cookTime: '35-45',
        price: 9,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/khinkali/khinkali-with-cheese.jpg`,
        tags: ['Khinkali'],
      },
      {
        id: 35,
        name: 'Liver in the Net-Fat',
        cookTime: '35-45',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/liver-in-the-net-fat.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 36,
        name: 'Satsebeli',
        cookTime: '10-20',
        price: 3,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/sauce/satsebeli.jpg`,
        tags: ['Sauce'],
      },
      {
        id: 37,
        name: 'Chicken Mtsvadi',
        cookTime: '35-45',
        price: 10,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/chicken-barbecue.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 38,
        name: 'Tchvishtari',
        cookTime: '25-35',
        price: 8,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/tchvishtari.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 39,
        name: 'Mtiuluri Khinkali',
        cookTime: '35-45',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/khinkali/mtiuluri-khinkali.jpg`,
        tags: ['Khinkali'],
      },
      {
        id: 40,
        name: 'Norvegian Siomga Barbecue',
        cookTime: '35-45',
        price: 25,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/fishy/norvegian-siomga-barbecue.jpg`,
        tags: ['Fish'],
      },
      {
        id: 41,
        name: 'Assorted Herbs',
        cookTime: '20-25',
        price: 6.5,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/cold-dishes/assorted-herbs.jpg`,
        tags: ['Cold dishes'],
      },
      {
        id: 42,
        name: 'Imeretian Khachapuri',
        cookTime: '30-35',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/imeretian-khachapuri.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 43,
        name: 'Calf Ribs with Ajika',
        cookTime: '35-45',
        price: 20,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/calf-ribs-with-ajika.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 44,
        name: 'Cucumber & Tomato Salad with Walnuts',
        cookTime: '20-25',
        price: 9,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/salads/cucumber-tomato-salad-with-walnuts.jpg`,
        tags: ['Salads'],
      },
      {
        id: 45,
        name: 'Kharcho',
        cookTime: '30-35',
        price: 10,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/soups/kharcho.jpg`,
        tags: ['Soups'],
      },
      {
        id: 46,
        name: 'Adjarian Khachapuri',
        cookTime: '20-25',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/pastry/adjarian-khachapuri.jpg`,
        tags: ['Pastry'],
      },
      {
        id: 47,
        name: 'Kebab with Sulguni',
        cookTime: '30-35',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/kebab-with-sulguni.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 48,
        name: 'Kebab',
        cookTime: '30-35',
        price: 1,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/hot-dishes/kebab.jpg`,
        tags: ['Hot dishes'],
      },
      {
        id: 49,
        name: 'Greek Salad',
        cookTime: '20-25',
        price: 12,
        favourite: false,
        origins: ['Georgia'],
        star: 4,
        imageUrl: `assets/salads/greek-salad.jpg`,
        tags: ['Salads'],
      },
    ];
  }
}
