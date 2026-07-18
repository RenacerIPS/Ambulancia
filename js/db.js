const DB_NAME = "ambulanciasDB";
const DB_VERSION = 1;
const STORE = "traslados";

let db = null;

function abrirBase() {

    return new Promise((resolve, reject) => {

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {

            reject("No fue posible abrir la base.");

        };

        request.onsuccess = () => {

            db = request.result;

            console.log("Base abierta correctamente.");

            resolve();

        };

        request.onupgradeneeded = (e) => {

            db = e.target.result;

            if (!db.objectStoreNames.contains(STORE)) {

                db.createObjectStore(STORE, {
                    keyPath: "numeroTraslado"
                });

            }

        };

    });

}


/* =======================================================
   GUARDAR
======================================================= */

function guardarTraslado(datos) {

    return new Promise((resolve, reject) => {

        const tx = db.transaction(STORE, "readwrite");

        const store = tx.objectStore(STORE);

        const req = store.put(datos);

        req.onsuccess = () => resolve();

        req.onerror = () => reject(req.error);

    });

}


/* =======================================================
   BUSCAR
======================================================= */

function obtenerTraslado(numero) {

    return new Promise((resolve, reject) => {

        const tx = db.transaction(STORE, "readonly");

        const store = tx.objectStore(STORE);

        const req = store.get(numero);

        req.onsuccess = () => resolve(req.result);

        req.onerror = () => reject(req.error);

    });

}


/* =======================================================
   LISTAR
======================================================= */

function listarTraslados() {

    return new Promise((resolve, reject) => {

        const tx = db.transaction(STORE, "readonly");

        const store = tx.objectStore(STORE);

        const req = store.getAll();

        req.onsuccess = () => resolve(req.result);

        req.onerror = () => reject(req.error);

    });

}


/* =======================================================
   ELIMINAR
======================================================= */

function eliminarTraslado(numero) {

    return new Promise((resolve, reject) => {

        const tx = db.transaction(STORE, "readwrite");

        const store = tx.objectStore(STORE);

        const req = store.delete(numero);

        req.onsuccess = () => resolve();

        req.onerror = () => reject(req.error);

    });

}