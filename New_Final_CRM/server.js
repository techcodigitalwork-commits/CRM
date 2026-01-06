 import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
import leadRoutes from "./routes/lead.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import carRoutes from "./routes/car.routes.js";
import quotationRoutes from "./routes/quotation.routes.js";
import testDriveRoutes from "./routes/testdrive.routes.js";
import inventoryRoutes from "./routes/inventory.routes.js";
import hrRoutes from "./routes/hr.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";


app.use("/api/leads", leadRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/car", carRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/testdrives", testDriveRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/hr", hrRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);


app.get("/", (req, res) => {
  res.send("CRM Backend Running...");
});

//  CORRECT BOOTSTRAP
const startServer = async () => {
  try {
    console.log("Connecting to MongoDB...");
    
    await mongoose.connect(
  "mongodb+srv://new_user21:new_user21@cluster0.c9nq7xd.mongodb.net/CRMData"
);


    console.log("✅ MongoDB Connected");

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`✅ Server running at: http://localhost:${PORT}`);
    });

  } catch (err) {    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

startServer();
