/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-rsJf2wxzGfJmng6X1TnWv6CXgD15iuo",
  authDomain: "votaciones-bf589.firebaseapp.com",
  databaseURL: "https://votaciones-bf589-default-rtdb.firebaseio.com",
  projectId: "votaciones-bf589",
  storageBucket: "votaciones-bf589.appspot.com",
  messagingSenderId: "654049206804",
  appId: "1:654049206804:web:371c72e9a99ec8b6503d01",
  measurementId: "G-DV58DPX2J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


  async function iniciarSesionGoogle() {
    //Obtenemos la logica de autenticacion
    var auth = getAuth();
    //Creamos el proveedor en este caso es Google.
    var provider = new GoogleAuthProvider();
    auth.language = "es";
    var response = await signInWithPopup(auth, provider);
    console.log(response);
    const database = getDatabase();
    set(ref(database, 'usuarios/' + response.user.uid), {
      email: response.user.email,
      miniatura: response.user.photoURL
    });
    return response.user;
  }

  function GuardarVotacion(datos) {
    const database = getDatabase();
    const idVotacion = Math.floor(Math.random() * 1000000);
    set(ref(database, 'votaciones/' + idVotacion), {
      nombre: datos.nombre,
      opcion1: datos.opcion1,
      opcion2: datos.opcion2
    });
    return idVotacion;
  }

  function recuperarVotaciones(callback) {
    const database = getDatabase();
    return onValue(ref(database, '/votaciones/'), (snapshot) => {
      callback(snapshot.val())
    }, {
      onlyOnce: true
    });
  }

  function verificarVoto(idVotacion, uid, callback){
    const database = getDatabase();
    return onValue(ref(database, '/votos/' + idVotacion + "/" + uid), (snapshot) => {
      callback(snapshot.val());
    }, {
      onlyOnce: true
    });
  }

  function recuperarVotos(idVotacion, callback){
    const database = getDatabase();
    return onValue(ref(database, '/votos/' + idVotacion), (snapshot) => {
      callback(snapshot.val());
    });
  }

  async function votar(idVotacion, opcion, idUsuario, detalles){
    const database = getDatabase();
    set(ref(database, 'votos/' + idVotacion + "/" + opcion + "/" + idUsuario), detalles);
    set(ref(database, 'votos/' + idVotacion + "/"+ idUsuario), 1);
  
  }

  function recuperarVotacion(idVotacion, callback) {
    const database = getDatabase();
    return onValue(ref(database, '/votaciones/' + idVotacion), (snapshot) => {
      callback(snapshot.val())
    }, {
      onlyOnce: true
    });
  }


export {
    iniciarSesionGoogle,
    GuardarVotacion,
    recuperarVotaciones,
    verificarVoto,
    recuperarVotos,
    votar,
    recuperarVotacion
}
