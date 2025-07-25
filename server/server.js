/*{const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const app = express();
const port = 4000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://mamatha:JUz0OVGNgFMwiSYm@myatlasclusteredu.xsavamt.mongodb.net/db1?retryWrites=true&w=majority')
.then(
    ()=> console.log('Db connected..')
)

// Simulating a database (replace with an actual database in production)
const users = [];

// Secret key for JWT (replace with a secure key in production)
const secretKey = 'your-secret-key';

// Registration endpoint
app.post('/Ngoregister', async (req, res) => {
  try {
    const { ngoEmail, password, ngoHeadName, ngoName } = req.body;

    // Check if the user with the same email already exists
    const existingUser = users.find((user) => user.ngoEmail === ngoEmail);
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data (replace this with database storage in production)
    const newUser = {
      ngoEmail,
      password: hashedPassword,
      ngoHeadName,
      ngoName,
    };
    users.push(newUser);

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login endpoint
app.post('/Ngologin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the provided email exists
    const user = users.find((user) => user.ngoEmail === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token (replace with a proper authentication strategy in production)
    const token = jwt.sign({ ngoEmail: user.ngoEmail }, secretKey, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
}*/
// server.js

const express = require('express');
const mongoose = require('mongoose');
const userController = require('./Routes/Ngolog');
const userreg=require('./Routes/Ngoreg');
const contactRoute = require('./Routes/Contactus');
const feedbackRoute = require('./Routes/Feedback'); // Import the Feedback route
const donationRoute = require('./Routes/Donation');
const donationRoutes = require('./Routes/Ngo');
const historyRoute = require('./Routes/History');
const reslogRoute = require('./Routes/Reslog'); // Import the Reslog route
const ResregRouter = require('./Routes/Resreg');
const AccRouter = require('./Routes/Acc');
const trackRoute = require('./Routes/Track');
const cors=require('cors')
// const { default: Ngologin } = require('../client/src/Ngologin');

const app = express();
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb+srv://pallavi6304:wpgDrZ7RMxB4pR9u@cluster0.0tefv2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
{ useNewUrlParser: true, useUnifiedTopology: true });

// Use the userController routes
app.use('/Ngologin',userController);

// Use the Ngoregister routes
app.use('/Ngoregister', userreg);

// Add the contact form route
app.use('/contact', contactRoute);

// Add the feedback route
app.use('/feedbacks', feedbackRoute);

// Use the donation route
app.use('/donation', donationRoute);

// Use the Ngo route
app.use('/ngo', donationRoutes);


// Use the history route
app.use('/ngo/history', historyRoute);

// Routes
app.use('/Resregister', ResregRouter);


// Use the Reslog route
app.use('/Reslogin', reslogRoute);

// Use the Acc route
app.use('/api', AccRouter);

// use the Track route
app.use('/track', trackRoute);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('db connected!');
});