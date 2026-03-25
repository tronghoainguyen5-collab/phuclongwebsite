export declare class ApiService {
    private storageKey;
    init(): Promise<void>;
    get<T>(collection: string): Promise<T[]>;
    getById<T>(collection: string, id: number): Promise<T | undefined>;
    post<T>(collection: string, item: any): Promise<T>;
    put<T>(collection: string, id: number, newData: any): Promise<T>;
    delete<T>(collection: string, id: number): Promise<T[]>;
}
//# sourceMappingURL=ApiService.d.ts.map