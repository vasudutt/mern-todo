const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 8080;

connectDB();
const app = express();

const whitelist = ["http://localhost:3000", "http://localhost:8080/"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.log(origin);
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/todos', require('./routes/todoRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});