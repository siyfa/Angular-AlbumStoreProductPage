import { Injectable } from "@angular/core";
import { Album } from "./album";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Product } from "./product";

@Injectable()
export class ProductService {
  // tslint:disable-next-line:member-ordering
  private _albumUrl = "../assets/album.json";
  private _productUrl = "../assests/products.json";

  constructor(private _http: Http) {}
  getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .map((response) => <Album>response.json());
  }
  getProducts(): Observable<Product[]> {
    return this._http
      .get(this._productUrl)
      .map((response) => <Product[]>response.json());
  }
}
