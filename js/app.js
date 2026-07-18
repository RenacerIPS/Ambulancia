window.onload = async () => {

    await abrirBase();

    document
        .getElementById("btnNuevo")
        .addEventListener("click", mostrarFormularioPaciente);

    document
        .getElementById("btnBuscar")
        .addEventListener("click", buscarTraslado);

    document
        .getElementById("btnExportar")
        .addEventListener("click", exportarTraslado);

    if ("serviceWorker" in navigator) {

        navigator.serviceWorker
            .register("service-worker.js");

    }

}