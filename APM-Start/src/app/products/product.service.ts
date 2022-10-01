import { Injectable } from "@angular/core";
import { IProductService } from "./i.product.service";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable()
export class ProductService implements IProductService {
  private _productUrl = 'api/products/products.json';
  constructor(private httpClient: HttpClient) { }
  public getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this._productUrl).pipe(
      // tap, comme map, permet d'accéder aux données. Mais avec tap
      // on ne fait que regarder, pas de modification
      // Utile surtout à des fin de débugage
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}
