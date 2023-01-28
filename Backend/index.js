const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const aiRoutes = require('./routes/AiRoutes');
const businessRoutes = require('./routes/businessRoutes');
const DSRoutes = require('./routes/DataScienceRoutes');
const educationRoutes = require('./routes/EducationRoutes');
const ICRoutes = require('./routes/ICRoutes')
const combinedRoutes = require('./routes/CombinedRoutes')

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use(cors({
  origin: "*"
}));

app.use('/', userRoutes);
app.use('/ai', aiRoutes);
app.use('/business', businessRoutes);
app.use('/datascience', DSRoutes);
app.use('/education', educationRoutes);
app.use('/IC', ICRoutes);
app.use('/combined', combinedRoutes)

mongoose.set("strictQuery", false);

const DB = process.env.URL.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB).then(() => console.log('Database Connection formed..')).catch(err => console.log('No Database Connection...'))

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Database is running on ${port}`);
})