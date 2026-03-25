export class ApiService {
    constructor() {
        this.storageKey = "db";
    }
    // load dữ liệu từ file JSON lần đầu
    async init() {
        if (!localStorage.getItem(this.storageKey)) {
            const res = await fetch("./db.json"); // ⚠️ đúng path public
            const data = await res.json();
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        }
    }
    // GET ALL
    async get(collection) {
        const data = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        return data[collection] || [];
    }
    // GET BY ID (bonus cho bạn luôn)
    async getById(collection, id) {
        const list = await this.get(collection);
        return list.find((item) => item.id === id);
    }
    // POST
    async post(collection, item) {
        const data = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        const list = data[collection] || [];
        item.id = Date.now();
        list.push(item);
        data[collection] = list;
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        return item;
    }
    // PUT
    async put(collection, id, newData) {
        const data = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        const list = data[collection] || [];
        const index = list.findIndex((item) => item.id === id);
        if (index !== -1) {
            list[index] = Object.assign(Object.assign({}, list[index]), newData);
        }
        data[collection] = list;
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        return list[index];
    }
    // DELETE
    async delete(collection, id) {
        const data = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
        const list = data[collection] || [];
        const newList = list.filter((item) => item.id !== id);
        data[collection] = newList;
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        return newList;
    }
}
//# sourceMappingURL=ApiService.js.map