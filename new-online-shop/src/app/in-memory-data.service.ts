import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';
import { Category } from './category'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb()  { 
    const products = [
      {
        id:1,
        name: 'White Dial Rose Gold & Grey Watch',
        price: '97,83$',
        description: 'Olivia Burton Midi Dial OB16MDW05 is an amazing and trendy Ladies watch.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100000056/main/large/ob16mdw05-1475843448-9719.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100000056/additional/large/ob16mdw05back-1482422746-279.jpg','https://d1rkccsb0jf1bk.cloudfront.net/products/100000056/additional/large/ob16mdw05side-1482422752-4939.jpg'],
        categoryId:2,
        plink:'',
        sale: false,
      },
      {
        id:2,
        name: 'Mother Of Pearl Bracelet Silver Watch',
        price: '122,60$',
        description: 'Case material is Stainless Steel and the Mother of pearl dial gives the watch that unique look.',
        Image:['https://d1rkccsb0jf1bk.cloudfront.net/products/100026749/main/large/MED_SILVER_BRACELET_OB16MOP02_1.jpg','https://d1rkccsb0jf1bk.cloudfront.net/products/100026749/additional/large/MED_SILVER_BRACELET_OB16MOP02_3.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100026749/additional/large/MED_SILVER_BRACELET_OB16MOP02_3.jpg'],
        categoryId:2,
        plink:'',
        sale: false,
      },
      {
        id:3,
        name: 'Tommy Hilfiger Watch 1791615',
        price: '185,75$',
        description: 'Tommy Hilfiger Shawn 1791615 is a practical and special Gents watch.Case material is Stainless Steel while the dial colour is Grey',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100037385/main/large/1791615_LRG_rgb_Web.jpg', 'https://www.watch4u.com/media/2019/08/6/6/tommy-hilfiger-hodinky-1791615-66603-size-large-wmark-watch-v-11.jpg', 'https://cf.shopee.sg/file/221fe972ae7bb0273c2201cc7ebf937f'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:4,
        name: 'Swiss Military Hanowa Watch',
        price: '382,65$',
        description: 'Swiss Military Hanowa Chrono Classic 06-5332.04.003 is a functional and special Gents watch. Material of the case is Stainless Steel and the Navy dial gives the watch that unique look.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100036857/main/large/06-4328.04.003.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100036857/additional/large/IMG_0009-1.jpg', 'https://i.ytimg.com/vi/ckdTAmOB9gc/maxresdefault.jpg'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:5,
        name: 'STORM Watch 47466/B',
        price: '173,36$',
        description: 'STORM 47466/B is a practical and very impressive Gents watch. Case material is Stainless Steel and the Blue dial gives the watch that unique look.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100029437/main/large/KOMBI_SLATE.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100029437/additional/large/Kombi_Slate_Angle.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100029437/additional/large/Kombi_Slate_Side.jpg'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:6,
        name: 'Fossil Watch BQ2465SET',
        price: '112,69$',
        description: 'Fossil LEDGER BQ2465SET is an amazing and handsome Gents watch. Material of the case is Stainless Steel while the dial colour is Black.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100036975/main/large/BQ2465SET_main.jpg','https://d1rkccsb0jf1bk.cloudfront.net/products/100036975/additional/large/BQ2465SET_1.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100036975/additional/large/BQ2465SET_2.jpg'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:7,
        name: 'Fossil Watch BQ2446',
        price: '122,60$',
        description: 'he features of the watch include (among others) a chronograph. This model has got 50 metres water resistancy.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100036974/main/large/BQ2446_main.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100036974/additional/large/BQ2446_2.jpg', 'https://i.ebayimg.com/images/g/1SsAAOSwp2xeZI1t/s-l400.jpg'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:8,
        name: 'Certina Watch C0144101605100',
        price: '386,37$',
        description: '200 metres water resistancy will protect the watch and allows it to be used for professional marine activity, skin diving and high impact water sports.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100026165/main/large/C0144171605100.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100026165/additional/large/100026165-4.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100026165/additional/large/100026165-2.jpg'],
        categoryId:1,
        plink:'',
        sale: true,
      },
      {
        id:9,
        name: 'Timex Watch TW2U22200',
        price: '86,67$',
        description: 'Material of the case is Brass plated and the White dial gives the watch that unique look.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100035502/main/large/TW2T75000.jpg','https://d1rkccsb0jf1bk.cloudfront.net/products/100035502/main/large/TW2T75000.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100035502/additional/large/TW2T75000_B.jpg'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:10,
        name: 'Tommy Hilfiger Watch 1782129',
        price: '185,75$',
        description: 'In regards to the water resistance, the watch has got a resistancy up to 30 metres.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100030928/main/large/1782082_LRG_rgb_Web.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100030928/main/large/1782082_LRG_rgb_Web.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100030928/main/large/1782082_LRG_rgb_Web.jpg'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:11,
        name: 'Tommy Hilfiger Watch 1782030',
        price: '185,75$',
        description: 'Tommy Hilfiger Jenna 1782030 is an incredible interesting Ladies watch. Case is made out of Stainless Steel while the dial colour is Pink.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100031459/main/large/1782125_LRG_rgb_Web.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100031459/additional/large/1782125_LRG_rgb_Back.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100031459/additional/large/17821252.jpg'],
        categoryId:1,
        plink:'',
        sale: false,
      },
      {
        id:12,
        name: 'Michael Kors Watch MK3853',
        price: '203,09$',
        description: 'Michael Kors PORTIA MK3853 is a beautiful and attractive Ladies watch from LADIESMETALS collection. Material of the case is Stainless Steel.',
        Image:['https://d1rkccsb0jf1bk.cloudfront.net/products/100036978/main/large/MK3853_main.jpg','https://d1rkccsb0jf1bk.cloudfront.net/products/100036978/additional/large/MK3853_2.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100036978/additional/large/MK3853_1.jpg'],
        categoryId:2,
        plink:'',
        sale: true,
      },
      {
        id:13,
        name: 'Ladies Michel Herbelin Equinoxe Watch',
        price: '390,08$',
        description: 'Michel Herbelin Equinoxe 17497/P29GR is an amazing and interesting Ladies watch.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100017871/main/large/16977-01go-1510315619-9540.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100017871/main/large/16977-01go-1510315619-9540.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100017871/additional/large/100017871-02.jpg'],
        categoryId:2,
        plink:'',
        sale: false,
      },
      {
        id:14,
        name: 'Ladies Guess Watch V1008M2',
        price: '110,21$',
        description: 'Guess V1008M2 is an incredible trendy Ladies watch. Material of the case is Stainless Steel, which stands for a high quality of the item.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100037273/main/large/V1008M2.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100037273/additional/large/V1008M2_B.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100037273/additional/large/V1008M2_C.jpg'],
        categoryId:2,
        plink:'',
        sale: false,
      },
      {
        id:15,
        name: 'Timex Watch TW2U22000',
        price: '86,67$',
        description: 'Timex Essential TW2U22000 is an amazing and trendy Ladies watch from Womens Easy Reader collection.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100037094/main/large/TW2U22000.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100037094/additional/large/TW2U22000_I.jpg', 'https://d1rkccsb0jf1bk.cloudfront.net/products/100037094/additional/large/TW2U22000_C.jpg'],
        categoryId:2,
        plink:'',
        sale: true,
      },
      {
        id:16,
        name: 'Maurice Lacroix Watch ',
        price: '736,82$',
        description: 'Maurice Lacroix Eliros EL1118-PVP01-610-1 is a great Unisex watch from Eliros collection. Case material is Stainless Steel.',
        Image: ['https://d1rkccsb0jf1bk.cloudfront.net/products/100037269/main/large/EL1118_PVP01_610_1.jpg', 'https://www.thewatchpages.com/app/uploads/2020/03/maurice-lacroix-eliros-green-smoked-dial-el118-pvp01-610-1-2-800x600.jpg', 'https://www.thewatchpages.com/app/uploads/2020/03/maurice-lacroix-eliros-green-smoked-dial-el118-pvp01-610-1-1-800x533.jpg'],
        categoryId:2,
        plink:'',
        sale: false,
      },
    ];
    const categories = [
      {id: 1, name: "Men"},
      {id: 2, name: "Women"},
    ];
    return {products, categories};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
//   genId(products: Product[]): number {
//     return products.length > 0 ? Math.max(...products.map(hero => hero.id)) + 1 : 11;
//   }
 }