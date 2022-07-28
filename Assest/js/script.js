const listadeTareas = document.querySelector("#Tareas")
const tareasInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const tareas = []


btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareasInput.value
    tareas.push(nuevaTarea)
    tareasInput.value = ""
})
    let html = ""
    for (let tarea of tareas) {
        html += `<ul>${tarea}</ul>`;
}
listadeTareas.innerHTML = html;