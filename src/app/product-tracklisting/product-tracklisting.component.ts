import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Album } from "../album";

@Component({
  selector: "app-product-tracklisting",
  templateUrl: "./product-tracklisting.component.html",
  styleUrls: ["./product-tracklisting.component.css"],
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;
  constructor(private _productSerivce: ProductService) {}

  ngOnInit() {
    this._productSerivce
      .getAlbum(1)
      .subscribe((response) => (this.albumInfo = response));
  }
}
