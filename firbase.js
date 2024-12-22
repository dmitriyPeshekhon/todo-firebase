import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDjLXLtb2p-Ny_ColB-_1MLEglhLdcygZc',
	authDomain: 'todos-4d89f.firebaseapp.com',
	projectId: 'todos-4d89f',
	storageBucket: 'todos-4d89f.firebasestorage.app',
	messagingSenderId: '562075895099',
	appId: '1:562075895099:web:9ce7a147fdef11bec5e31e',
	databaseURL: 'https://todos-4d89f-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
