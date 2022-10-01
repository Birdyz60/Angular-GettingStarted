import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductClassComponent implements OnInit {
  //#region Propriétés
  public pageTitle: string = 'Product List!';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;
  private _listFilter: string = '';
  public get listFilter(): string {
    console.log('In get listeFilter()');
    return this._listFilter;
  }
  public set listFilter(value: string) {
    console.log('In set listeFilter() : ', value);
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  public filteredProducts: IProduct[] = [];
  public products: IProduct[] = [];
  //#endregion


  constructor(private productService: ProductService) { }

  public onToggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  public onRatingClicked(message: string): void {
    this.pageTitle = `Product List : ${message}`;
  }
}
