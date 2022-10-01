import { Observable } from "rxjs";
import { IProduct } from "./product";

export abstract class IProductService {
  public abstract getProducts(): Observable<IProduct[]>;
}
