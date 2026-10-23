import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
app.use(express.json());

const bookingSchema = z.object({
  pickup: z.string().min(2),
  destination: z.string().min(2),
  category: z.enum(['Economy', 'Comfort', 'Premium', 'Family', 'Airport']),
  payment: z.enum(['Cash', 'Orange Money', 'Moov Money', 'Bank Card']),
  note: z.string().optional(),
});

const estimatedRide = {
  pickup: 'Cocody Angré',
  destination: 'Plateau',
  distanceKm: 18.4,
  durationMinutes: 32,
  baseFare: 5000,
  serviceFee: 350,
  estimatedTotal: 5350,
};

const availableDrivers = [
  { id: 'drv-101', name: 'Akwaba K.', rating: 4.9, etaMin: 4, status: 'nearby', car: 'Toyota Corolla' },
  { id: 'drv-102', name: 'Nguessan C.', rating: 4.8, etaMin: 7, status: 'arriving', car: 'Hyundai Tucson' },
  { id: 'drv-103', name: 'Kouassi D.', rating: 4.7, etaMin: 10, status: 'available', car: 'Mercedes C-Class' },
];

const dashboardMetrics = {
  onlineDrivers: 128,
  activeTrips: 54,
  pendingRequests: 18,
  platformRevenue: 'XOF 4,382,500',
};

const adminOverview = {
  completedRides: 2431,
  cancellations: 96,
  refundRequests: 21,
  supportTickets: 14,
  fraudFlags: 6,
};

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'ivoire-mobility-api',
    env: 'demo',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/estimate', (_req, res) => {
  res.json({
    ...estimatedRide,
    currency: 'XOF',
    note: 'Demo price only. Final fare can vary based on traffic, tolls, and route changes.',
  });
});

app.get('/api/drivers', (_req, res) => {
  res.json({ drivers: availableDrivers });
});

app.get('/api/driver/dashboard', (_req, res) => {
  res.json({
    driver: {
      name: 'Akwaba K.',
      status: 'online',
      rating: 4.9,
      todayEarnings: 48250,
      weekEarnings: 289500,
      pendingPayout: 18630,
      trips: 12,
      documents: 'verified',
      nextRequest: 'Plateau → Cocody, 17 minutes',
    },
    recentTrips: [
      { id: 'TRIP-106', route: 'Plateau → Cocody', amount: 6400, status: 'completed' },
      { id: 'TRIP-109', route: 'Yopougon → Airport', amount: 12400, status: 'in_progress' },
      { id: 'TRIP-112', route: 'Marcory → Le Plateau', amount: 7800, status: 'completed' },
    ],
  });
});

app.get('/api/admin/overview', (_req, res) => {
  res.json({ metrics: dashboardMetrics, operations: adminOverview });
});

app.post('/api/ride/create', (req, res) => {
  const parsed = bookingSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      errors: parsed.error.flatten(),
      message: 'Booking data is invalid.',
    });
  }

  const payload = parsed.data;

  const result = {
    ok: true,
    rideId: `RIDE-${Date.now().toString().slice(-6)}`,
    pickup: payload.pickup,
    destination: payload.destination,
    category: payload.category,
    payment: payload.payment,
    status: 'searching_driver',
    estimatedAmount: 5350,
    quote: {
      base: 5000,
      serviceFee: 350,
      currency: 'XOF',
    },
    assignedDriver: availableDrivers[0],
    note: payload.note || 'No additional instructions.',
    timestamp: new Date().toISOString(),
  };

  return res.status(201).json(result);
});

app.listen(port, () => {
  console.log(`Ivoire Mobility API is running on http://localhost:${port}`);
});
