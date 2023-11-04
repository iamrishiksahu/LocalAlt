// Desc: This is the main file for the backend server. It will be used to serve the requests from the frontend.
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite')
const {connectFirestoreEmulator} = require('firebase/firestore');
//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const { getAuth, connectAuthEmulator} = require("firebase/auth");
//const { getAnalytics } = require('firebase/analytics');
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser')
require('dotenv').config();


app.use(morgan('dev'));
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  
app.use(cors(corsOptions));
  

//firebase config 
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
  };



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth= getAuth(firebaseApp);
const db= getFirestore(firebaseApp);
//connectFirestoreEmulator(db, 'localhost', 8001);
//connectAuthEmulator(auth, 'http://localhost:8000', {disableWarnings: true});
//const analytics = getAnalytics(firebaseApp);


//define the port for the server
const PORT = process.env.PORT;

//define the import routes

// const accountsRoutes = require('./routes/accountsRoutes')
const productsRoutes = require('./routes/productsRoutes')(db, firebaseApp)
const orderRoutes = require('./routes/orderRoutes')(db, firebaseApp)
const authRoutes = require('./routes/authRoutes')(auth, db, firebaseApp);

const searchRoutes = require('./routes/searchRoutes')(firebaseApp)

const storeRoutes = require('./routes/storeRoutes')(db, firebaseApp);

app.use(express.json())

//server is now running
app.get('/', (req, res) => {
    res.status(201).json({
        message: 'Hi, Welcome to the backend server for LocalAt. I will be happy to serve your requests!'

    })
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

//define the routes

app.use('/auth', authRoutes)
app.use('/store', storeRoutes)
app.use('/products', productsRoutes)
app.use('/orders', orderRoutes)
app.use('/search', searchRoutes)
// app.use('/accounts', accountsRoutes)
// app.use('/orders', ordersRoutes)
// app.use('/search', searchRoutes)
