import { Topping } from "../models/Topping.js";
import { ApiService } from "./ApiService.js";
export declare class ToppingService extends ApiService {
    getAll(): Promise<Topping[]>;
    getById(id: string): Promise<Topping>;
    create(t: Topping): Promise<Topping>;
    edit(t: Topping): Promise<Topping>;
    remove(id: string): Promise<Topping>;
}
//# sourceMappingURL=ToppingService.d.ts.map