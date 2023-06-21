import { User } from "./user.interface";

export interface Comment {
    name: string;
    site: number;
    user?: User;
    quality?: string
}