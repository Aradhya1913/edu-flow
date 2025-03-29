const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/session', sessionRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected ✅');
}).catch(err => console.error('Mongo Error ❌', err));

const PORT = process.env.PORT || 5050;
app.get('/', (req, res) => {
  res.send('API is running... 🚀');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));