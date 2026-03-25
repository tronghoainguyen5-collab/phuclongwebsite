import { User } from "../models/User.js";
import { ApiService } from "./ApiService.js";
export class StatisticService extends ApiService {
    static getInstance() {
        if (!StatisticService.instance) {
            StatisticService.instance = new StatisticService();
        }
        return StatisticService.instance;
    }
    async getTotalProduct() {
        const data = await this.get(`/products`);
        return data.length;
    }
    async getTotalUser() {
        const data = await this.get(`/users`);
        return data.length;
    }
    async getTotalOrder() {
        const data = await this.get(`/orders`);
        return data.length;
    }
    async getTotalMoney() {
        const data = await this.get(`/orders?status=success`);
        return data.reduce((sum, item) => sum + item.total, 0);
    }
    async getRevenueByDate() {
        const orders = await this.get(`/orders?status=success`);
        const revenue = orders.reduce((sum, item) => {
            const date = new Date(item.createDate).toISOString().split('T')[0]; // Lấy ngày theo định dạng YYYY-MM-DD
            if (date) {
                sum[date] = (sum[date] || 0) + item.total; // Cộng dồn doanh thu theo ngày
            }
            return sum;
        }, {});
        return revenue;
    }
    async create(user) {
        const data = await this.post('/users', user);
        return new User(data.id || "", data.email || "", data.password || "", data.phone, data.name, data.address || "", data.role);
    }
    async checkEmailValid(email) {
        const data = await this.get(`/users?email=${email}`);
        if (data.length > 0) {
            // console.log(data);
            return false;
        }
        return true;
    }
    async login(email, password) {
        const data = await this.get(`/users?email=${email}&password=${password}`);
        if (data.length > 0 && data[0]) {
            let user = data[0];
            return new User(user.id, email, "", user.phone, user.name, user.address || "", user.role);
        }
        return false;
    }
    saveLoginState(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    getLoginState() {
        let userString = localStorage.getItem('user');
        if (userString) {
            let user = JSON.parse(userString);
            return new User(user.id, user.email || "", "", user.phone, user.name, user.address || "", user.role);
        }
        return false;
    }
    clearLoginState() {
        localStorage.removeItem('user');
    }
}
//# sourceMappingURL=StatisticService.js.map