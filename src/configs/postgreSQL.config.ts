import { Pool } from "pg";

export class PostgreSQLConfig {
    static readonly pool = new Pool({
        user: "postgres",
        password: "",
        host: "localhost",
        port: 5432,
        database: "test_db",
        max: 30,
        idleTimeoutMillis: 60 * 1000,
        connectionTimeoutMillis: 3 * 1000
    });
}