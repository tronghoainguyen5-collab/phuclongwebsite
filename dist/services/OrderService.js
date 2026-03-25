import { CartItem } from "../models/CartItem.js";
import { Order } from "../models/Order.js";
import { ApiService } from "./ApiService.js";
export class OrderService extends ApiService {
    static getInstance() {
        if (!OrderService.instance) {
            OrderService.instance = new OrderService();
        }
        return OrderService.instance;
    }
    async getAll() {
        const data = await this.get('/orders');
        return data.map((o) => new Order(o.id, o.createDate, o.total, o.user, o.items, o.status));
    }
    async getLimit(limit) {
        const data = await this.get(`/orders?_sort-createDate&_limit=${limit}`);
        return data.map((o) => new Order(o.id, o.createDate, o.total, o.user, o.items, o.status)).slice(0, limit);
    }
    async getById(id) {
        const data = await this.get(`/orders/${id}`);
        return new Order(data.id, data.createDate, data.total, data.user, data.items.map((i) => new CartItem(i.product, i.toppings, i.quantity)), data.status);
    }
    async create(order) {
        const data = await this.post('/orders', order);
        return new Order(data.id, data.createDate, data.total, data.user, data.items, data.status);
    }
    async edit(order) {
        const data = await this.update(`/orders/${order.id}`, order);
        return new Order(data.id, data.createDate, data.total, data.user, data.items, data.status);
    }
}
//# sourceMappingURL=OrderService.js.map