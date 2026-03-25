import { Topping } from "../models/Topping.js";
import { ApiService } from "./ApiService.js";
export class ToppingService extends ApiService {
    async getAll() {
        const data = await this.get('/toppings');
        return data.map((t) => new Topping(t.id, t.name, t.price));
    }
    async getById(id) {
        const data = await this.get(`/toppings/${id}`);
        return new Topping(data.id, data.name, data.price);
    }
    async create(t) {
        const data = await this.post(`/toppings`, t);
        console.log(data);
        return data;
    }
    async edit(t) {
        const data = await this.update(`/toppings/${t.id}`, t);
        console.log(data);
        return data;
    }
    async remove(id) {
        const data = await this.delete(`/toppings/${id}`);
        console.log(data);
        return data;
    }
}
//# sourceMappingURL=ToppingService.js.map