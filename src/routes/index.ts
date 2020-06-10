import { Router } from "express";
import * as users from "../controllers/Users";

const router = Router();
router.get("/api/users", users.getUserList);
router.get("/api/users/:username/details", users.getUserDetails);
router.get("/api/users/:username/repos", users.getUserRepos);


export default router;