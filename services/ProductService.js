import { Product } from "../models/Product.js";
import { ApiService } from "./ApiService.js";
export class ProductService extends ApiService {
    async getAll() {
        const data = await super.get("products");
        return data.map(p => new Product(p.id, p.name, p.price, p.image, p.description, p.category_id));
    }
    async getById(id) {
        const data = await super.getById("products", id);
        if (!data)
            return undefined;
        return new Product(data.id, data.name, data.price, data.image, data.description, data.category_id);
    }
    async create(p) {
        const data = await super.post("products", p);
        return new Product(data.id, data.name, data.price, data.image, data.description, data.category_id);
    }
    async edit(p) {
        if (!p.id)
            throw new Error("Product ID không hợp lệ");
        const data = await super.put("products", Number(p.id), p);
        if (!data)
            return undefined;
        return new Product(data.id, data.name, data.price, data.image, data.description, data.category_id);
    }
    async remove(id) {
        const data = await super.delete("products", id);
        return data.map(p => new Product(p.id, p.name, p.price, p.image, p.description, p.category_id));
    }
}
//# sourceMappingURL=ProductService.js.map