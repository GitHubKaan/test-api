import { UUID } from "node:crypto";

// User
interface BaseUser {
    uuid: UUID;
    name: string;
    surname: string;
};
export type User = BaseUser; // Make interface to type
export type OptionalUser = Partial<BaseUser>; // Make all "BaseUser" values optional
