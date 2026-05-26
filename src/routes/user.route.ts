import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ParsedQs } from "qs";
import { User } from "../types/user.type";
import { UserService } from "../services/user.service";

export class UserRoute {
    public static async signup(
        req: Request<any, any, User, ParsedQs, Record<string, any>>,
        res: Response
    ) {
        const payload = req.body;
        
        await UserService.add(payload);

        return res
            .status(StatusCodes.OK)
            .set("Authentication", `Bearer ${"test_token"}`)
            .json({
                description: "success!",
            });
    }
}