// js/firebase-config.js
// ============================================================
//  Reemplaza estos valores con los de tu proyecto Firebase.
//  Firebase Console → Configuración del proyecto → Tus apps → Web
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyD074I_Wx3no5ZncrmWSd1BdcvK7TT-Y5U",
  authDomain: "abecedario-anuros.firebaseapp.com",
  projectId: "abecedario-anuros",
  storageBucket: "abecedario-anuros.firebasestorage.app",
  messagingSenderId: "795339448000",
  appId: "1:795339448000:web:bab802e716bfc7c76e1725"
};

// Correos autorizados para el panel de administración
const ADMIN_EMAILS = [
  "juanrubio2277@gmail.com",
  "jrubioq@unal.edu.co"
];

export { firebaseConfig, ADMIN_EMAILS };
