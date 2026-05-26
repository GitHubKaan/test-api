import { app } from "../../main";
import { Router } from "express";
import { UserRoute } from "../routes/user.route";

export class RouterUtil {
    static routes() {
        const router = Router();
        app.use("/", router);
        
        router.post(
            "/user/signup",
            UserRoute.signup
        );
    }
}
