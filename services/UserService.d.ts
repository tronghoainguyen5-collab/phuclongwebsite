import { User } from "../models/User.js";
import { ApiService } from "./ApiService.js";
export declare class UserService extends ApiService {
    private static instance;
    static getInstance(): UserService;
    create(user: User): Promise<User>;
    checkEmailValid(email: string): Promise<boolean>;
    login(email: string, password: string): Promise<User | false>;
    saveLoginState(user: User): void;
    getLoginState(): User | false;
    clearLoginState(): void;
    findById(id: number): Promise<User | undefined>;
    updateUser(user: User): Promise<User | undefined>;
}
//# sourceMappingURL=UserService.d.ts.map