import jwt from "jsonwebtoken";

export default function (req, res, next) {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;                  // keep existing behavior
        req.userId = decoded.id;             // added for convenience
        req.userRole = decoded.role || "customer";  // NEW: attach role

        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
}
