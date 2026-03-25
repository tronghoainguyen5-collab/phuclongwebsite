import { User } from "../models/User.js";
import { ApiService } from "./ApiService.js";
export declare class StatisticService extends ApiService {
    private static instance;
    static getInstance(): StatisticService;
    getTotalProduct(): Promise<number>;
    getTotalUser(): Promise<number>;
    getTotalOrder(): Promise<number>;
    getTotalMoney(): Promise<number>;
    getRevenueByDate(): Promise<[string, number][]>;
    create(user: User): Promise<User>;
    checkEmailValid(email: string): Promise<boolean>;
    login(email: string, password: string): Promise<User | false>;
    saveLoginState(user: User): void;
    getLoginState(): User | false;
    clearLoginState(): void;
}
//# sourceMappingURL=StatisticService.d.ts.map