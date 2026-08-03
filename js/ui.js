function mostrarFormularioPaciente() {

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `

    <h2>Nuevo Traslado</h2>

    <div class="tabs">

        <button class="tab-btn active" onclick="mostrarTab('tabInicio',this)">
            Inicio del Traslado
        </button>

        <button class="tab-btn" onclick="mostrarTab('tabDestino1',this)">
            Destino 1
        </button>

        <button class="tab-btn" onclick="mostrarTab('tabDestino2',this)">
            Destino 2
        </button>

        <button class="tab-btn" onclick="mostrarTab('tabNotas',this)">
            Notas
        </button>

        <button class="tab-btn" onclick="mostrarTab('tabTripulacion',this)">
            Tripulación
        </button>

        <button class="tab-btn" onclick="mostrarTab('tabFirmas',this)">
            Firmas
        </button>

    </div>

    <form id="frmTraslado">

        <div id="tabInicio" class="tab-content activa">

            <div class="fila">

    <div class="grupo">
        <label>N° Traslado</label>
        <input type="number" id="numeroTraslado" required>
    </div>

    <div class="grupo">
        <label>Móvil N°</label>
        <input type="text" id="movil">
    </div>

    <div class="grupo">
        <label>Placa</label>
        <input type="text" id="placa">
    </div>

</div>

<div class="fila">

    <div class="grupo">

        <label>Fecha y Hora de Despacho</label>

        <input
            type="datetime-local"
            id="fechaHoraDespacho">

    </div>

    <div class="grupo">

        <label>Tipo de Traslado</label>

        <select id="tipoTraslado">

            <option value=""></option>

            <option>
                Traslado Asistencial Básico Terrestre Primario
            </option>

            <option>
                Traslado Asistencial Básico Terrestre Secundario
            </option>

            <option>
                Traslado Asistencial Medicalizado Terrestre Primario
            </option>

            <option>
                Traslado Asistencial Medicalizado Terrestre Secundario
            </option>

        </select>

    </div>

</div>

            <div class="fila">

                <div class="grupo">
                    <label>Primer Nombre</label>
                    <input type="text" id="primerNombre">
                </div>

                <div class="grupo">
                    <label>Segundo Nombre</label>
                    <input type="text" id="segundoNombre">
                </div>

            </div>

            <div class="fila">

                <div class="grupo">
                    <label>Primer Apellido</label>
                    <input type="text" id="primerApellido">
                </div>

                <div class="grupo">
                    <label>Segundo Apellido</label>
                    <input type="text" id="segundoApellido">
                </div>

            </div>

            <div class="fila">

                <div class="grupo">

                    <label>Tipo Documento</label>

                    <select id="tipoDocumento">

                        <option value="CC">CC</option>
                        <option value="TI">TI</option>
                        <option value="CE">CE</option>
                        <option value="RC">RC</option>
                        <option value="PA">PA</option>

                    </select>

                </div>

                <div class="grupo">

                    <label>Número Documento</label>

                    <input type="text" id="documento">

                </div>

            </div>

            <div class="fila">

                <div class="grupo">

                    <label>Género</label>

                    <select id="genero">

                        <option>Masculino</option>
                        <option>Femenino</option>

                    </select>

                </div>

                <div class="grupo">

                    <label>Fecha Nacimiento</label>

                    <input type="date" id="fechaNacimiento">

                </div>

            </div>

            <div class="fila">

                <div class="grupo">

                    <label>Aseguradora</label>

                    <input type="text" id="aseguradora">

                </div>

                <div class="grupo">

                    <label>Departamento - Municipio de Residencia</label>

                    <input type="text" id="ubicacion">

                </div>

            </div>

            <div class="fila">

                <div class="grupo">

                    <label>Dirección</label>

                    <input type="text" id="direccion">

                </div>

                <div class="grupo">

                    <label>Teléfono Paciente</label>

                    <input type="text" id="telefonoPaciente">

                </div>

            </div>

            <div class="fila">

                <div class="grupo">

                    <label>Estado Civil</label>

                    <select id="estadoCivil">

                        <option>Soltero</option>
                        <option>Casado</option>
                        <option>Unión libre</option>
                        <option>Separado</option>
                        <option>Viudo</option>

                    </select>

                </div>

                <div class="grupo">

                    <label>Escolaridad</label>

                    <select id="escolaridad">

                        <option>Ninguna</option>
                        <option>Primaria</option>
                        <option>Secundaria</option>
                        <option>Técnico</option>
                        <option>Tecnólogo</option>
                        <option>Universitario</option>
                        <option>Posgrado</option>

                    </select>

                </div>

            </div>

            <div class="fila">

    <div class="grupo">

        <label>Ocupación</label>

        <input type="text" id="ocupacion">

    </div>

</div>

<div class="seccion">

    <h3>Datos del Acompañante</h3>

    <div class="fila">

        <div class="grupo">

            <label>Nombre Completo del Acompañante</label>

            <input
                type="text"
                id="acompananteNombre">

        </div>

    </div>

    <div class="fila">

        <div class="grupo">

            <label>Tipo Documento</label>

            <select id="acompananteTipoDocumento">

                <option value=""></option>

                <option value="CC">CC</option>
                <option value="TI">TI</option>
                <option value="CE">CE</option>
                <option value="RC">RC</option>
                <option value="PA">PA</option>

            </select>

        </div>

        <div class="grupo">

            <label>N° Documento</label>

            <input
                type="text"
                id="acompananteDocumento">

        </div>

        <div class="grupo">

            <label>Teléfono</label>

            <input
                type="text"
                id="acompananteTelefono">

        </div>

    </div>

</div>

<div class="seccion">

    <h3>Origen del Traslado</h3>

    <div class="fila">

        <div class="grupo">

            <label>Institución de Origen</label>

            <input
                type="text"
                id="institucionOrigen">

        </div>

    </div>

    <div class="fila">

        <div class="grupo">

            <label>Departamento</label>

            <input
                type="text"
                id="departamentoOrigen">

        </div>

        <div class="grupo">

            <label>Municipio</label>

            <input
                type="text"
                id="municipioOrigen">

        </div>

    </div>

    <div class="fila">

        <div class="grupo">

            <label>Fecha y Hora Llegada Origen</label>

            <input
                type="datetime-local"
                id="fechaLlegadaOrigen">

        </div>

        <div class="grupo">

            <label>Fecha y Hora Salida Origen</label>

            <input
                type="datetime-local"
                id="fechaSalidaOrigen">

        </div>

    </div>

</div>

<div class="seccion">

    <h3>Profesional que Entrega en Origen</h3>

    <div class="fila">

        <div class="grupo">

            <label>Nombre Completo</label>

            <input
                type="text"
                id="nombreEntregaOrigen">

        </div>

    </div>

    <div class="fila">

        <div class="grupo">

            <label>Documento / Tarjeta Profesional</label>

            <input
                type="text"
                id="documentoEntregaOrigen">

        </div>

    </div>

</div>

        </div>


        <div id="tabDestino1" class="tab-content">

    <div class="seccion">

        <h3>Destino 1</h3>

        <div class="fila">

            <div class="grupo">

                <label>Institución Destino 1</label>

                <input
                    type="text"
                    id="institucionDestino1">

            </div>

        </div>

        <div class="fila">

            <div class="grupo">

                <label>Departamento</label>

                <input
                    type="text"
                    id="departamentoDestino1">

            </div>

            <div class="grupo">

                <label>Municipio</label>

                <input
                    type="text"
                    id="municipioDestino1">

            </div>

        </div>

        <div class="fila">

            <div class="grupo">

                <label>Fecha y Hora Llegada</label>

                <input
                    type="datetime-local"
                    id="fechaLlegadaDestino1">

            </div>

            <div class="grupo">

                <label>Fecha y Hora Salida</label>

                <input
                    type="datetime-local"
                    id="fechaSalidaDestino1">

            </div>

        </div>

    </div>

    <div class="seccion">

        <h3>Profesional que Recibe en Destino 1</h3>

        <div class="fila">

            <div class="grupo">

                <label>Nombre Completo</label>

                <input
                    type="text"
                    id="nombreRecibeDestino1">

            </div>

        </div>

        <div class="fila">

            <div class="grupo">

                <label>Documento / Tarjeta Profesional</label>

                <input
                    type="text"
                    id="documentoRecibeDestino1">

            </div>

        </div>

    </div>

</div>


<div id="tabDestino2" class="tab-content">

    <div class="seccion">

        <h3>Destino 2 (Opcional)</h3>

        <div class="fila">

            <div class="grupo">

                <label>Institución Destino 2</label>

                <input
                    type="text"
                    id="institucionDestino2">

            </div>

        </div>

        <div class="fila">

            <div class="grupo">

                <label>Departamento</label>

                <input
                    type="text"
                    id="departamentoDestino2">

            </div>

            <div class="grupo">

                <label>Municipio</label>

                <input
                    type="text"
                    id="municipioDestino2">

            </div>

        </div>

        <div class="fila">

            <div class="grupo">

                <label>Fecha y Hora Llegada</label>

                <input
                    type="datetime-local"
                    id="fechaLlegadaDestino2">

            </div>

            <div class="grupo">

                <label>Fecha y Hora Salida</label>

                <input
                    type="datetime-local"
                    id="fechaSalidaDestino2">

            </div>

        </div>

    </div>

    <div class="seccion">

        <h3>Profesional que Recibe en Destino 2</h3>

        <div class="fila">

            <div class="grupo">

                <label>Nombre Completo</label>

                <input
                    type="text"
                    id="nombreRecibeDestino2">

            </div>

        </div>

        <div class="fila">

            <div class="grupo">

                <label>Documento / Tarjeta Profesional</label>

                <input
                    type="text"
                    id="documentoRecibeDestino2">

            </div>

        </div>

    </div>

</div>

       <div id="tabNotas" class="tab-content">

    <div class="seccion">

        <h3>Evolución / Notas del Traslado</h3>

        <div class="grupo">

            <label>Observaciones Clínicas y Evolución del Paciente</label>

            <textarea
                id="notasTraslado"
                rows="18"
                placeholder="Registre aquí la evolución clínica, signos relevantes, procedimientos realizados, novedades durante el traslado y cualquier observación importante."></textarea>

        </div>

    </div>

</div>

<div id="tabTripulacion" class="tab-content">

    <div class="seccion">

        <h3>Médico de Traslado</h3>

        <div class="fila">

            <div class="grupo">

                <label>Nombre Completo</label>

                <input
                    type="text"
                    id="nombreMedico">

            </div>

            <div class="grupo">

                <label>Documento / Registro Profesional</label>

                <input
                    type="text"
                    id="documentoMedico">

            </div>

        </div>

    </div>

    <div class="seccion">

        <h3>Paramédico de Traslado</h3>

        <div class="fila">

            <div class="grupo">

                <label>Nombre Completo</label>

                <input
                    type="text"
                    id="nombreParamedico">

            </div>

            <div class="grupo">

                <label>Documento / Registro Profesional</label>

                <input
                    type="text"
                    id="documentoParamedico">

            </div>

        </div>

    </div>

    <div class="seccion">

        <h3>Conductor de Traslado</h3>

        <div class="fila">

            <div class="grupo">

                <label>Nombre Completo</label>

                <input
                    type="text"
                    id="nombreConductor">

            </div>

            <div class="grupo">

                <label>Documento</label>

                <input
                    type="text"
                    id="documentoConductor">

            </div>

        </div>

    </div>

</div>




<div id="tabFirmas" class="tab-content">

    <div class="seccion">

        <h3>Captura de Firmas</h3>

        <div class="fila">

            <div class="grupo">

                <label>Tipo de Firma</label>

                <select id="tipoFirma">

                    <option value="paciente">
                        Paciente
                    </option>

                    <option value="profesionalOrigen">
                        Profesional Entrega Origen
                    </option>

                    <option value="profesionalDestino1">
                        Profesional Recibe Destino 1
                    </option>

                    <option value="profesionalDestino2">
                        Profesional Recibe Destino 2
                    </option>

                    <option value="medico">
                        Médico Traslado
                    </option>

                    <option value="paramedico">
                        Paramédico Traslado
                    </option>

                    <option value="conductor">
                        Conductor Traslado
                    </option>

                </select>

            </div>

        </div>

        <div class="fila">

            <div class="grupo">

                <label>Estado</label>

                <input
                    type="text"
                    id="estadoFirma"
                    readonly>

            </div>

        </div>

<canvas
    id="canvasFirma"
    width="900"
    height="350"
    style="
        border:2px solid #999;
        background:white;
        width:100%;
        height:350px;
        border-radius:8px;">
</canvas>

        <br><br>

        <button
            type="button"
            id="btnLimpiarFirma">

            Limpiar Firma

        </button>

        <button
            type="button"
            id="btnGuardarFirma">

            Guardar Firma

        </button>

    </div>

</div>







        <br>

        <button type="submit">

            Guardar Traslado

        </button>

    </form>

    `;

    inicializarCanvasFirma();

    document
        .getElementById("frmTraslado")
        .addEventListener("submit", guardarFormulario);

}

function mostrarTab(id, boton) {

    document
        .querySelectorAll(".tab-content")
        .forEach(tab => tab.classList.remove("activa"));

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn => btn.classList.remove("active"));

    document
        .getElementById(id)
        .classList.add("activa");

    boton.classList.add("active");

}

async function guardarFormulario(e){

    e.preventDefault();

    const numeroTraslado =
    Number(document.getElementById("numeroTraslado").value);

    const trasladoExistente =
    await obtenerTraslado(numeroTraslado);

    const traslado={

        numeroTraslado:numeroTraslado,

        paciente:{

            movil:document.getElementById("movil").value,

            placa:document.getElementById("placa").value,

            primerNombre:document.getElementById("primerNombre").value,

            segundoNombre:document.getElementById("segundoNombre").value,

            primerApellido:document.getElementById("primerApellido").value,

            segundoApellido:document.getElementById("segundoApellido").value,

            tipoDocumento:document.getElementById("tipoDocumento").value,

            documento:document.getElementById("documento").value,

            genero:document.getElementById("genero").value,

            fechaNacimiento:document.getElementById("fechaNacimiento").value,

            aseguradora:document.getElementById("aseguradora").value,

            ubicacion:document.getElementById("ubicacion").value,

            direccion:document.getElementById("direccion").value,

            telefonoPaciente:document.getElementById("telefonoPaciente").value,

            estadoCivil:document.getElementById("estadoCivil").value,

            escolaridad:document.getElementById("escolaridad").value,

            ocupacion:document.getElementById("ocupacion").value

        },

        acompanante:{

            nombre:
                document.getElementById("acompananteNombre")?.value || "",

            tipoDocumento:
                document.getElementById("acompananteTipoDocumento")?.value || "",

            documento:
                document.getElementById("acompananteDocumento")?.value || "",

            telefono:
                document.getElementById("acompananteTelefono")?.value || ""

        },

        traslado:{

    fechaHoraDespacho:
        document.getElementById("fechaHoraDespacho")?.value || "",

    tipoTraslado:
        document.getElementById("tipoTraslado")?.value || "",

    notas:
        document.getElementById("notasTraslado")?.value || ""

},

        origen:{

    institucion:
        document.getElementById("institucionOrigen")?.value || "",

    departamento:
        document.getElementById("departamentoOrigen")?.value || "",

    municipio:
        document.getElementById("municipioOrigen")?.value || "",

    fechaLlegada:
        document.getElementById("fechaLlegadaOrigen")?.value || "",

    fechaSalida:
        document.getElementById("fechaSalidaOrigen")?.value || "",

    nombreEntrega:
        document.getElementById("nombreEntregaOrigen")?.value || "",

    documentoEntrega:
        document.getElementById("documentoEntregaOrigen")?.value || ""

},

        destino1:{

    institucion:
        document.getElementById("institucionDestino1")?.value || "",

    departamento:
        document.getElementById("departamentoDestino1")?.value || "",

    municipio:
        document.getElementById("municipioDestino1")?.value || "",

    fechaLlegada:
        document.getElementById("fechaLlegadaDestino1")?.value || "",

    fechaSalida:
        document.getElementById("fechaSalidaDestino1")?.value || "",

    nombreRecibe:
        document.getElementById("nombreRecibeDestino1")?.value || "",

    documentoRecibe:
        document.getElementById("documentoRecibeDestino1")?.value || ""

},

        destino2:{

    institucion:
        document.getElementById("institucionDestino2")?.value || "",

    departamento:
        document.getElementById("departamentoDestino2")?.value || "",

    municipio:
        document.getElementById("municipioDestino2")?.value || "",

    fechaLlegada:
        document.getElementById("fechaLlegadaDestino2")?.value || "",

    fechaSalida:
        document.getElementById("fechaSalidaDestino2")?.value || "",

    nombreRecibe:
        document.getElementById("nombreRecibeDestino2")?.value || "",

    documentoRecibe:
        document.getElementById("documentoRecibeDestino2")?.value || ""

},

        tripulacion:{

    medico:{

        nombre:
            document.getElementById("nombreMedico")?.value || "",

        documento:
            document.getElementById("documentoMedico")?.value || ""

    },

    paramedico:{

        nombre:
            document.getElementById("nombreParamedico")?.value || "",

        documento:
            document.getElementById("documentoParamedico")?.value || ""

    },

    conductor:{

        nombre:
            document.getElementById("nombreConductor")?.value || "",

        documento:
            document.getElementById("documentoConductor")?.value || ""

    }

},

firmas:
    trasladoExistente?.firmas || {

        paciente:"",
        profesionalOrigen:"",
        profesionalDestino1:"",
        profesionalDestino2:"",
        medico:"",
        paramedico:"",
        conductor:""

    },

        auditoria:{

            fechaCreacion:new Date().toISOString(),

            fechaModificacion:new Date().toISOString()

        }

    };

    await guardarTraslado(traslado);

    alert("Traslado guardado correctamente.");

}

async function buscarTraslado() {

    const numero = Number(document.getElementById("buscarNumero").value);

    if (!numero) {

        alert("Digite el número del traslado.");

        return;

    }

    const traslado = await obtenerTraslado(numero);

    if (!traslado) {

        alert("No existe ese traslado.");

        return;

    }

    mostrarFormularioPaciente();

    document.getElementById("numeroTraslado").value =
        traslado.numeroTraslado || "";

    document.getElementById("movil").value =
        traslado.paciente.movil || "";

    document.getElementById("placa").value =
        traslado.paciente.placa || "";

    document.getElementById("primerNombre").value =
        traslado.paciente.primerNombre || "";

    document.getElementById("segundoNombre").value =
        traslado.paciente.segundoNombre || "";

    document.getElementById("primerApellido").value =
        traslado.paciente.primerApellido || "";

    document.getElementById("segundoApellido").value =
        traslado.paciente.segundoApellido || "";

    document.getElementById("tipoDocumento").value =
        traslado.paciente.tipoDocumento || "";

    document.getElementById("documento").value =
        traslado.paciente.documento || "";

    document.getElementById("genero").value =
        traslado.paciente.genero || "";

    document.getElementById("fechaNacimiento").value =
        traslado.paciente.fechaNacimiento || "";

    document.getElementById("aseguradora").value =
        traslado.paciente.aseguradora || "";

    document.getElementById("ubicacion").value =
        traslado.paciente.ubicacion || "";

    document.getElementById("direccion").value =
        traslado.paciente.direccion || "";

    document.getElementById("telefonoPaciente").value =
        traslado.paciente.telefonoPaciente || "";

    document.getElementById("estadoCivil").value =
        traslado.paciente.estadoCivil || "";

    document.getElementById("escolaridad").value =
        traslado.paciente.escolaridad || "";

    document.getElementById("ocupacion").value =
        traslado.paciente.ocupacion || "";

    document.getElementById("fechaHoraDespacho").value =
        traslado.traslado?.fechaHoraDespacho || "";

    document.getElementById("tipoTraslado").value =
        traslado.traslado?.tipoTraslado || "";

    document.getElementById("acompananteNombre").value =
        traslado.acompanante?.nombre || "";

    document.getElementById("acompananteTipoDocumento").value =
        traslado.acompanante?.tipoDocumento || "";

    document.getElementById("acompananteDocumento").value =
        traslado.acompanante?.documento || "";

    document.getElementById("acompananteTelefono").value =
        traslado.acompanante?.telefono || "";

    document.getElementById("institucionOrigen").value =
    traslado.origen?.institucion || "";

    document.getElementById("departamentoOrigen").value =
        traslado.origen?.departamento || "";

    document.getElementById("municipioOrigen").value =
        traslado.origen?.municipio || "";

    document.getElementById("fechaLlegadaOrigen").value =
        traslado.origen?.fechaLlegada || "";

    document.getElementById("fechaSalidaOrigen").value =
        traslado.origen?.fechaSalida || "";

    document.getElementById("institucionDestino1").value =
    traslado.destino1?.institucion || "";

    document.getElementById("departamentoDestino1").value =
        traslado.destino1?.departamento || "";

    document.getElementById("municipioDestino1").value =
        traslado.destino1?.municipio || "";

    document.getElementById("fechaLlegadaDestino1").value =
        traslado.destino1?.fechaLlegada || "";

    document.getElementById("fechaSalidaDestino1").value =
        traslado.destino1?.fechaSalida || "";

    document.getElementById("nombreRecibeDestino1").value =
        traslado.destino1?.nombreRecibe || "";

    document.getElementById("documentoRecibeDestino1").value =
        traslado.destino1?.documentoRecibe || "";

    document.getElementById("institucionDestino2").value =
        traslado.destino2?.institucion || "";

    document.getElementById("departamentoDestino2").value =
        traslado.destino2?.departamento || "";

    document.getElementById("municipioDestino2").value =
        traslado.destino2?.municipio || "";

    document.getElementById("fechaLlegadaDestino2").value =
        traslado.destino2?.fechaLlegada || "";

    document.getElementById("fechaSalidaDestino2").value =
        traslado.destino2?.fechaSalida || "";

    document.getElementById("nombreRecibeDestino2").value =
        traslado.destino2?.nombreRecibe || "";

    document.getElementById("documentoRecibeDestino2").value =
        traslado.destino2?.documentoRecibe || "";

    document.getElementById("notasTraslado").value =
        traslado.traslado?.notas || "";

    document.getElementById("nombreMedico").value =
        traslado.tripulacion?.medico?.nombre || "";

    document.getElementById("documentoMedico").value =
        traslado.tripulacion?.medico?.documento || "";

    document.getElementById("nombreParamedico").value =
        traslado.tripulacion?.paramedico?.nombre || "";

    document.getElementById("documentoParamedico").value =
        traslado.tripulacion?.paramedico?.documento || "";

    document.getElementById("nombreConductor").value =
        traslado.tripulacion?.conductor?.nombre || "";

    document.getElementById("documentoConductor").value =
        traslado.tripulacion?.conductor?.documento || "";

    document.getElementById("nombreEntregaOrigen").value =
    traslado.origen?.nombreEntrega || "";

    document.getElementById("documentoEntregaOrigen").value =
    traslado.origen?.documentoEntrega || "";
}

function inicializarCanvasFirma() {

    const canvas = document.getElementById("canvasFirma");

    if (!canvas) return;

    canvas.style.touchAction = "none";

    const ctx = canvas.getContext("2d");

    let dibujando = false;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    function obtenerPosicion(evento) {

        const rect = canvas.getBoundingClientRect();

        const escalaX =
            canvas.width / rect.width;

        const escalaY =
            canvas.height / rect.height;

        return {

            x:
                (evento.clientX - rect.left)
                * escalaX,

            y:
                (evento.clientY - rect.top)
                * escalaY

        };

    }

    function iniciar(evento) {

        dibujando = true;

        const pos =
            obtenerPosicion(evento);

        ctx.beginPath();

        ctx.moveTo(
            pos.x,
            pos.y
        );

    }

    function dibujar(evento) {

        if (!dibujando) return;

        evento.preventDefault();

        const pos =
            obtenerPosicion(evento);

        ctx.lineTo(
            pos.x,
            pos.y
        );

        ctx.stroke();

    }

    function finalizar() {

        dibujando = false;

    }

    canvas.addEventListener(
        "pointerdown",
        iniciar
    );

    canvas.addEventListener(
        "pointermove",
        dibujar
    );

    canvas.addEventListener(
        "pointerup",
        finalizar
    );

    canvas.addEventListener(
        "pointerleave",
        finalizar
    );

    canvas.addEventListener(
        "pointercancel",
        finalizar
    );

    document
        .getElementById("btnLimpiarFirma")
        .addEventListener("click", () => {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        });

    document
        .getElementById("btnGuardarFirma")
        .addEventListener(
            "click",
            guardarFirmaActual
        );

    document
        .getElementById("tipoFirma")
        .addEventListener(
            "change",
            cargarFirmaActual
        );

}

async function guardarFirmaActual() {

    const numeroTraslado =
        Number(document.getElementById("numeroTraslado").value);

    if (!numeroTraslado) {

        alert("Primero debe guardar o indicar el número de traslado.");

        return;

    }

    const traslado =
        await obtenerTraslado(numeroTraslado);

    if (!traslado) {

        alert("Primero guarde el traslado.");

        return;

    }

    const tipoFirma =
        document.getElementById("tipoFirma").value;

    const canvas =
        document.getElementById("canvasFirma");

    const imagenFirma =
        canvas.toDataURL("image/png");

    if (!traslado.firmas) {

        traslado.firmas = {};

    }

    traslado.firmas[tipoFirma] =
        imagenFirma;

    traslado.auditoria.fechaModificacion =
        new Date().toISOString();

    await guardarTraslado(traslado);

    document.getElementById("estadoFirma").value =
        "Firma registrada";

    alert("Firma guardada correctamente.");

}

async function cargarFirmaActual() {

    const numeroTraslado =
        Number(document.getElementById("numeroTraslado").value);

    const canvas =
        document.getElementById("canvasFirma");

    const ctx =
        canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    document.getElementById("estadoFirma").value =
        "Sin firma";

    if (!numeroTraslado) return;

    const traslado =
        await obtenerTraslado(numeroTraslado);

    if (!traslado) return;

    const tipoFirma =
        document.getElementById("tipoFirma").value;

    const firma =
        traslado?.firmas?.[tipoFirma];

    if (!firma) return;

    const imagen = new Image();

    imagen.onload = function () {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.drawImage(
            imagen,
            0,
            0,
            canvas.width,
            canvas.height
        );

    };

    imagen.src = firma;

    document.getElementById("estadoFirma").value =
        "Firma registrada";

}

async function exportarTraslado() {

    const numero =
        Number(document.getElementById("buscarNumero").value);

    if (!numero) {

        alert("Digite el número de traslado.");

        return;

    }

    const traslado =
        await obtenerTraslado(numero);

    if (!traslado) {

        alert("No existe ese traslado.");

        return;

    }

    const datos = [

        traslado.numeroTraslado,

        traslado.paciente?.movil || "",
        traslado.paciente?.placa || "",

        traslado.paciente?.primerNombre || "",
        traslado.paciente?.segundoNombre || "",

        traslado.paciente?.primerApellido || "",
        traslado.paciente?.segundoApellido || "",

        traslado.paciente?.tipoDocumento || "",
        traslado.paciente?.documento || "",

        traslado.paciente?.genero || "",
        traslado.paciente?.fechaNacimiento || "",

        traslado.paciente?.aseguradora || "",
        traslado.paciente?.ubicacion || "",
        traslado.paciente?.direccion || "",
        traslado.paciente?.telefonoPaciente || "",

        traslado.paciente?.estadoCivil || "",
        traslado.paciente?.escolaridad || "",
        traslado.paciente?.ocupacion || "",

        traslado.acompanante?.nombre || "",
        traslado.acompanante?.tipoDocumento || "",
        traslado.acompanante?.documento || "",
        traslado.acompanante?.telefono || "",

        traslado.traslado?.fechaHoraDespacho || "",
        traslado.traslado?.tipoTraslado || "",

        traslado.origen?.institucion || "",
        traslado.origen?.departamento || "",
        traslado.origen?.municipio || "",
        traslado.origen?.fechaLlegada || "",
        traslado.origen?.fechaSalida || "",
        traslado.origen?.nombreEntrega || "",
        traslado.origen?.documentoEntrega || "",

        traslado.destino1?.institucion || "",
        traslado.destino1?.departamento || "",
        traslado.destino1?.municipio || "",
        traslado.destino1?.fechaLlegada || "",
        traslado.destino1?.fechaSalida || "",

        traslado.destino1?.nombreRecibe || "",
        traslado.destino1?.documentoRecibe || "",

        traslado.destino2?.institucion || "",
        traslado.destino2?.departamento || "",
        traslado.destino2?.municipio || "",
        traslado.destino2?.fechaLlegada || "",
        traslado.destino2?.fechaSalida || "",

        traslado.destino2?.nombreRecibe || "",
        traslado.destino2?.documentoRecibe || "",

        traslado.tripulacion?.medico?.nombre || "",
        traslado.tripulacion?.medico?.documento || "",

        traslado.tripulacion?.paramedico?.nombre || "",
        traslado.tripulacion?.paramedico?.documento || "",

        traslado.tripulacion?.conductor?.nombre || "",
        traslado.tripulacion?.conductor?.documento || "",

        (traslado.traslado?.notas || "")
            .replace(/\r?\n/g, " ")

    ];

    const contenidoCSV =
        datos.join("|");

    const zip = new JSZip();

    zip.file(
        `${numero}.csv`,
        contenidoCSV
    );

    const firmas =
        traslado.firmas || {};

    for (const tipoFirma in firmas) {

        const imagenFirma =
            firmas[tipoFirma];

        if (!imagenFirma) {
            continue;
        }

        const base64 =
            imagenFirma.split(",")[1];

        zip.file(
            `${numero}_${tipoFirma}.png`,
            base64,
            { base64: true }
        );

    }

    const contenidoZip =
        await zip.generateAsync({
            type: "blob"
        });

    const enlace =
        document.createElement("a");

    enlace.href =
        URL.createObjectURL(contenidoZip);

    enlace.download =
        `${numero}.zip`;

    document.body.appendChild(enlace);

    enlace.click();

    document.body.removeChild(enlace);

    alert(
        "ZIP generado correctamente."
    );

}
