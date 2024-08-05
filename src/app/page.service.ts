import { Injectable } from '@angular/core';
import { goods, orders } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  pageList: Array<goods> = [
    // {
    //   id: 1,
    //   name: 'Wireless Bluetooth Headphones',
    //   price: 89.99,
    //   image:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDFoZmzJqeMbajI6LSONBTI6x5dnT7qPCcA&s',
    //   quantity: 3,
    //   description: 'Good',
    // },
    // {
    //   id: 2,
    //   name: 'Smartphone XYZ 128GB',
    //   price: 599,
    //   image:
    //     'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg',
    //   quantity: 1,
    //   description: 'Great',
    // },
    // {
    //   id: 3,
    //   name: '4K Ultra HD Smart TV 55-inch',
    //   price: 749.99,
    //   image:
    //     'https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$',
    //   quantity: 0,
    //   description: 'Good',
    // },
    // {
    //   id: 4,
    //   name: 'Electric Kettle Stainless Steel',
    //   price: 29.99,
    //   image:
    //     'https://www.premierkitchen.in/wp-content/uploads/2023/04/Electric-Kettle-054481201.jpg',
    //   quantity: 5,
    //   description: 'Bad',
    // },
    // {
    //   id: 5,
    //   name: 'Ergonomic Office Chair',
    //   price: 159.99,
    //   image:
    //     'https://www.shutterstock.com/image-photo/office-chair-black-leather-isolated-260nw-235250581.jpg',
    //   quantity: 9,
    //   description: 'Excellent',
    // },
  ];

  orderList: Array<orders> = [];
  constructor() {}

  getAllpagesP(): Promise<goods[]> {
    return fetch('https://66b0a8ac6a693a95b539a7ec.mockapi.io/E-commerce').then(
      (res) => res.json()
    );
  }

  getpageList() {
    return this.pageList;
  }

  getpageByIdP(id: string): Promise<goods> {
    return fetch(
      `https://66b0a8ac6a693a95b539a7ec.mockapi.io/E-commerce/${id}`
    ).then((res) => res.json());
  }

  getAllordersP(): Promise<orders[]> {
    return fetch(`https://66b0a8ac6a693a95b539a7ec.mockapi.io/orders`).then(
      (res) => res.json()
    );
  }
}
