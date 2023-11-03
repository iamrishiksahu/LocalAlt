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
    apiKey: "AIzaSyBVdo0lgjLhsSO5StQbo3n7I2ttiTkDY_8",
    authDomain: "localalt.firebaseapp.com",
    projectId: "localalt",
    storageBucket: "localalt.appspot.com",
    messagingSenderId: "428319982093",
    appId: "1:428319982093:web:de298ea66185bc6e20cb44",
    measurementId: "G-DRXP89W3Z2"
  };



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth= getAuth(firebaseApp);
const db= getFirestore(firebaseApp);
//connectFirestoreEmulator(db, 'localhost', 8001);
//connectAuthEmulator(auth, 'http://localhost:8000', {disableWarnings: true});
//const analytics = getAnalytics(firebaseApp);


//define the port for the server
const PORT = process.env.PORT || 8001

//define the import routes

// const accountsRoutes = require('./routes/accountsRoutes')
// const productsRoutes = require('./routes/productsRoutes')
// const ordersRoutes = require('./routes/ordersRoutes')
const authRoutes = require('./routes/authRoutes')(auth, db, firebaseApp);
// const searchRoutes = require('./routes/searchRoutes')
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

// app.use('/accounts', accountsRoutes)
// app.use('/products', productsRoutes)
// app.use('/orders', ordersRoutes)
// app.use('/search', searchRoutes)
