// Firebase configuration loader
// Reads from .env dynamically if available, or falls back to configured defaults.

export const defaultFirebaseConfig = {
  apiKey: "AIzaSyDPe-NDsqx4ZBaaWQTADmbdbC-kf3OQ5mM",
  authDomain: "hola-trail.firebaseapp.com",
  projectId: "hola-trail",
  storageBucket: "hola-trail.firebasestorage.app",
  messagingSenderId: "16795622814",
  appId: "1:16795622814:web:2dc418c0dc9e2f349cca8f",
  measurementId: "G-461W3ERR2J"
};

export async function getFirebaseConfig() {
  const config = { ...defaultFirebaseConfig };
  try {
    const res = await fetch('.env');
    if (res.ok) {
      const text = await res.text();
      for (const rawLine of text.split('\n')) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        const eqIdx = line.indexOf('=');
        if (eqIdx === -1) continue;
        const key = line.slice(0, eqIdx).trim();
        const val = line.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
        if (key === 'FIREBASE_API_KEY' || key === 'VITE_FIREBASE_API_KEY') config.apiKey = val;
        else if (key === 'FIREBASE_AUTH_DOMAIN' || key === 'VITE_FIREBASE_AUTH_DOMAIN') config.authDomain = val;
        else if (key === 'FIREBASE_PROJECT_ID' || key === 'VITE_FIREBASE_PROJECT_ID') config.projectId = val;
        else if (key === 'FIREBASE_STORAGE_BUCKET' || key === 'VITE_FIREBASE_STORAGE_BUCKET') config.storageBucket = val;
        else if (key === 'FIREBASE_MESSAGING_SENDER_ID' || key === 'VITE_FIREBASE_MESSAGING_SENDER_ID') config.messagingSenderId = val;
        else if (key === 'FIREBASE_APP_ID' || key === 'VITE_FIREBASE_APP_ID') config.appId = val;
        else if (key === 'FIREBASE_MEASUREMENT_ID' || key === 'VITE_FIREBASE_MEASUREMENT_ID') config.measurementId = val;
      }
    }
  } catch (err) {
    // If .env fetch fails (e.g. cross-origin, strict security), use defaults
  }
  return config;
}
