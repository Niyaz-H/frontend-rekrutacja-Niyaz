import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: 100,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: 200,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      price: 300,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is the description for product 4.',
      price: 400,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is the description for product 5.',
      price: 500,
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}