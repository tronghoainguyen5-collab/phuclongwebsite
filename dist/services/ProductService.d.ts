import { Product } from "../models/Product.js";
import { ApiService } from "./ApiService.js";
export declare class ProductService extends ApiService {
    getAll(): Promise<Product[]>;
    getById(id: number): Promise<Product | undefined>;
    create(p: Product): Promise<Product>;
    edit(p: Product): Promise<Product | undefined>;
    remove(id: number): Promise<Product[]>;
}
//# sourceMappingURL=ProductService.d.ts.map