const listadeTareas = document.querySelector("#Tareas")
const tareasInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const tareas = []


btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareasInput.value
    tareas.push(nuevaTarea)
    tareasInput.value = ""

    let html = ""
    for (let tarea of tareas) {
        html += `<ul>${tarea}</ul>`;
}
listadeTareas.innerHTML = html;
})

btnAgregar.addEventListener("click", () => {
    nuevaTarea = {id: Date.now(), nombre: invitadoInput.value}
    invitados.push(nuevoInvitado)
    invitadoInput.value = ""
    let html = ""
    for (invitado of invitados) {
    html += `<li>${invitado.nombre}</li>`
    }
    listaDeInvitados.innerHTML = html;
    })