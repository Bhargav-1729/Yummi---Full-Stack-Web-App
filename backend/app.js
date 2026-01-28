const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./config/db");
const swaggerDocs = require("./config/swagger");

// Routes
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const restaurantRoutes = require("./routes/resRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Middleware
const {
  errorHandler,
  routenotFoundHandler,
} = require("./middleware/errorHandler");

const app = express();

/* --------------------------------------------------
   TRUST PROXY (required for Render / Vercel)
-------------------------------------------------- */
app.set("trust proxy", 1);

/* --------------------------------------------------
   DATABASE CONNECTION
-------------------------------------------------- */
if (process.env.NODE_ENV !== "test") {
  connectDB();
}

/* --------------------------------------------------
   SWAGGER
-------------------------------------------------- */
swaggerDocs(app);

/* --------------------------------------------------
   ✅ CORS (FIXED – THIS WAS YOUR MAIN ISSUE)
-------------------------------------------------- */
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

// 🚨 REQUIRED FOR PREFLIGHT REQUESTS
app.options("*", cors());

/* --------------------------------------------------
   BODY PARSERS
-------------------------------------------------- */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* --------------------------------------------------
   LOGGING (optional)
-------------------------------------------------- */
// app.use(morgan("dev"));

/* --------------------------------------------------
   STATIC FILES
-------------------------------------------------- */
app.use("/uploads", express.static("uploads"));

/* --------------------------------------------------
   ROUTES
-------------------------------------------------- */
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cart", cartRoutes);

/* --------------------------------------------------
   HEALTH CHECK
-------------------------------------------------- */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

/* --------------------------------------------------
   TEST ERROR ROUTE
-------------------------------------------------- */
app.get("/test-error", (req, res, next) => {
  const err = new Error("This is a test error!");
  err.status = 500;
  next(err);
});

/* --------------------------------------------------
   ERROR HANDLERS (ALWAYS LAST)
-------------------------------------------------- */
app.use(routenotFoundHandler);
app.use(errorHandler);

/* --------------------------------------------------
   EXPORT APP (Server started elsewhere)
-------------------------------------------------- */
module.exports = app;
