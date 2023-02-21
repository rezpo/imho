// import { Request, Response, NextFunction } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import config from "config";

// export default function (req: Request, res: Response, next: NextFunction) {
//     const token = req.header("x-auth-token");
//     if (!token) return res.status(401).send({ message: "No token provided" });

//     try {
//         const decoded = jwt.verify(token, config.get("jwtkey")) as JwtPayload;
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(400).send({ message: "Invalid token" });
//     }
// }
