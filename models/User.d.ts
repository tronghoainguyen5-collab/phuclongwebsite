export declare class User {
    id?: string | undefined;
    email?: string;
    password: string;
    phone: string;
    name: string;
    address?: string;
    role: "admin" | "user";
    constructor(id: string | undefined, email: string, password: string, phone: string, name: string, address: string, role: "admin" | "user");
}
//# sourceMappingURL=User.d.ts.map