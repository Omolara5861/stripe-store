
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

/** API Base URL */
const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetch items/products from @STORE_BASE_URL
   * @param limit is the number of items/products to retrieve from the API
   * @param sort specify how users can sort the results. By default results are sorted in descending order
   * @param category is the name of the category of items/products to retrieve from the API
   * @returns an observable that emits items/products that have been retrieved from the API
   */
  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }

  /** Fetches categories of products from @STORE_BASE_URL
   * @returns an observable that emits categories that have been retrieved from the API
  */
  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    );
  }
}