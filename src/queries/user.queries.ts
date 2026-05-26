
export class UserQueries {
    public static readonly add =  `
        INSERT INTO users (
            uuid,
            name,
            surname
        )
        VALUES ($1, $2, $3);
    `;
}