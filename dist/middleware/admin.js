export default function (req, res, next) {
    if (!req.body.isAdmin)
        return res.status(403).send({ message: "Access denied" });
    return next();
}
//# sourceMappingURL=admin.js.map