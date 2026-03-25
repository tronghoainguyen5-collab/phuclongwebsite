import { User } from "../models/User.js";
import { ApiService } from "./ApiService.js";
export class UserService extends ApiService {
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    async create(user) {
        const data = await super.post("users", user);
        return new User(data.id, data.email, data.password, data.phone, data.name, data.address || "", data.role);
    }
    async checkEmailValid(email) {
        const users = await super.get("users");
        return !users.find(u => u.email === email);
    }
    async login(email, password) {
        const users = await super.get("users");
        const found = users.find(u => u.email.trim() === email.trim() &&
            u.password.trim() === password.trim());
        if (!found)
            return false;
        return new User(found.id, found.email, "", found.phone, found.name, found.address || "", found.role);
    }
    saveLoginState(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }
    getLoginState() {
        const userString = localStorage.getItem("user");
        if (!userString)
            return false;
        const user = JSON.parse(userString);
        return new User(user.id, user.email, "", user.phone, user.name, user.address || "", user.role);
    }
    clearLoginState() {
        localStorage.removeItem("user");
    }
    // ⚠️ KHÔNG override getById nữa → đổi tên
    async findById(id) {
        const data = await super.getById("users", id);
        if (!data)
            return undefined;
        return new User(data.id, data.email, "", data.phone, data.name, data.address || "", data.role);
    }
    async updateUser(user) {
        if (!user.id)
            throw new Error("User ID không hợp lệ");
        const data = await super.put("users", Number(user.id), user);
        if (!data)
            return undefined;
        return new User(data.id, data.email, "", data.phone, data.name, data.address || "", data.role);
    }
}
//# sourceMappingURL=UserService.js.map