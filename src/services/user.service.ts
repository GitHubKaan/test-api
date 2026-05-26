import { v4 as uuidv4 } from "uuid";
import { UUID } from "node:crypto";
import { User } from "../types/user.type";
import { PostgreSQLConfig } from "../configs/postgreSQL.config";
import { UserQueries } from "../queries/user.queries";

export class UserService {
    static async add(
        payload: User
    ): Promise<
        UUID
    > {
        const UUID = uuidv4() as UUID;

        const result = await PostgreSQLConfig.pool.query(
            UserQueries.add,
            [
                UUID,
                payload.name,
                payload.surname
            ]
        )

        if (result.rowCount && result.rowCount > 0) {
            return UUID
        }

        return UUID;
    };
}