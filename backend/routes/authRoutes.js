const express = require('express');
const admin = require('firebase-admin');
const { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } = require("firebase/auth");
const { collection, addDoc, getDocs, getFirestore, doc, getDoc, setDoc } = require('firebase/firestore');

const router = express.Router();
admin.initializeApp();


const authRoutes = (auth, db, firebaseApp) => {

  const dbs = getFirestore(firebaseApp);

  router.post('/register', (req, res) => {
    const { name, email, password, role, contact, locality, longitude, latitude, address } = req.body;

    // First, as soon as we have the email and password, we create the user in the auth table
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const userUID = userCredential.user.uid;
        //console.log(user);

        // Now we create the user in the Firestore database
        // const userRef =÷ collection('users').doc(userUID);
        //const userRef = doc(db, 'users', userUID);

        setDoc(doc(dbs, 'users', userUID), {
          role: role,
          uid: userUID,
          user_name: name,
          user_contact: contact,
          user_email: email,
          user_locality: locality,
          user_longitude: longitude,
          user_latitude: latitude,
          user_address: address,
        })
          .then(() => {
            console.log('User added to the database');
            res.status(200).json({
              message: 'Registration successful',
              user: {
                uid: userCredential.user.uid,
                documentId: userCredential.user.uid,
                email: userCredential.user.email,
                emailVerified: userCredential.user.emailVerified,
                phoneNumber: contact,
                displayName: name,
                role: role,
                location: locality,
                longitude: longitude,
                latitude: latitude,
                address: address,
                tokensValidAfterTime: userCredential.user.tokensValidAfterTime,
                tenantId: userCredential.user.tenantId,
                providerData: userCredential.user.providerData,
              }
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Firebase Authentication Error: ${errorCode} - ${errorMessage}`);
            res.status(401).json({ error: 'Registration failed', errorCode, errorMessage });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Firebase Authentication Error: ${errorCode} - ${errorMessage}`);
        res.status(401).json({ error: 'Registration failed', errorCode, errorMessage });
      });
  });

  // route for handling the login request
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        let toSend = {}

        getDoc(doc(dbs, 'users', user.uid)).then((doc) => {
          if (doc.exists()) {
            // user.role=doc.data().role;
            toSend = { uid: user.uid, ...doc.data() }
            console.log("Document data:", toSend);
            res.status(200).json({
              message: 'Login successful',
              user: { ...toSend }
            });

          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        })
        // console.log(toSend);


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Firebase Authentication Error: ${errorCode} - ${errorMessage}`);
        res.status(401).json({ error: 'Login failed', errorCode, errorMessage });
      });
  });
  // router.post('/login', (req, res) => {
  //   const { email, password } = req.body;

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(async (userCredential) => {
  //       const user = userCredential.user;
  //       const uid = user.uid;
  //       const db=getFirestore(firebaseApp);
  //       const usersRef = db.collection('users');
  //       const userDoc = await usersRef.doc(uid).get();
  //       if (userDoc.exists) {
  //         const userData = userDoc.data();
  //         const role = userData.role;

  //         res.status(200).json({ 
  //           message: 'Login successful', 
  //           user,
  //           uid,
  //           role,
  //         });
  //       } else {
  //         res.status(401).json({ error: 'User not found in the database' });
  //       }
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error(`Firebase Authentication Error: ${errorCode} - ${errorMessage}`);
  //       res.status(401).json({ error: 'Login failed', errorCode, errorMessage });
  //     });
  // });

  // Route for handling the "forgot password" request
  router.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Send a password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        res.status(200).json({ message: 'Password reset email sent successfully' });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Firebase Authentication Error: ${errorCode} - ${errorMessage}`);
        res.status(400).json({ error: 'Password reset email not sent', errorCode, errorMessage });
      });
  });
  // Route for handling the user logout
  router.post('/logout', (req, res) => {
    signOut(auth)
      .then(() => {
        res.status(200).json({ message: 'Logout successful' });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Firebase Authentication Error: ${errorCode} - ${errorMessage}`);
        res.status(400).json({ error: 'Logout failed', errorCode, errorMessage });
      });
  });

  return router;
};

module.exports = authRoutes;
