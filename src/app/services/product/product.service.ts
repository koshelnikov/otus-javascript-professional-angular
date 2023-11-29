import { Injectable } from '@angular/core';
import {ConfigService} from "../config/config.service";
import {Observable} from "rxjs";
import {Product} from "./product.type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpClient: HttpClient
  ) {
    this.apiUrl = `${configService.config.apiUrl}/products`

  }


  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl)
  }

  getProductsByName(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}?name_like=${name}`)
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`)
  }

  createProduct(product: Product): Observable<void> {
    return this.httpClient.post<void>(this.apiUrl, product)
  }

  saveProduct(product: Product): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${product.id}`, product)
  }
}
