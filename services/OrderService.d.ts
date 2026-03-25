import { Order } from "../models/Order.js";
import { ApiService } from "./ApiService.js";
export declare class OrderService extends ApiService {
    private static instance;
    static getInstance(): OrderService;
    getAll(): Promise<Order[]>;
    getLimit(limit: number): Promise<Order[]>;
    getById(id: string): Promise<Order>;
    create(order: Order): Promise<Order>;
    edit(order: Order): Promise<Order>;
}
//# sourceMappingURL=OrderService.d.ts.map