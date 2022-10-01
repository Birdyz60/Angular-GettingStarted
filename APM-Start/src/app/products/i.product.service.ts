import { IProduct } from "./product";

export abstract class IProductService {
  public abstract getProducts(): IProduct[];
}
