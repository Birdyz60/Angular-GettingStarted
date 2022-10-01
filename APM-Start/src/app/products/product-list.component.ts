import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProductService } from "./i.product.service";
import { IProduct } from "./product";
import { delay, filter, map, Observable, range, Subscription } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductClassComponent implements OnInit, OnDestroy {
  //#region Propriétés
  public pageTitle: string = 'Product List!';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;
  private _listFilter: string = '';
  public errorMessage: string = '';
  private _sub!: Subscription;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  public filteredProducts: IProduct[] = [];
  public products: IProduct[] = [];
  //#endregion


  constructor(private productService: IProductService) { }

  public onToggleImage(): void {
    this.showImage = !this.showImage;
  }
  source$: Observable<number> = range(0, 10);

  ngOnInit(): void {
    this._sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    this.source$.pipe(
      // map permet la transformation. Ici chaque élément est multiplié par 3
      map(x => x * 3),
      // filtre filtre les éléments (c'est vrai ?!).
      // Ici on ne va conservé que les nombres pair
      filter(x => x % 2 === 0)
    ).subscribe(x => console.log(x))
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
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
