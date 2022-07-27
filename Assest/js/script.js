const listadeTareas = document.querySelector("#listadeTareas")
const tareasInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("agregarTarea")
const tareas = []


btnAgregar.addEventListener("click",() => {
    const nuevaTarea = tareaInput.value
    tareas.push(nuevaTarea)
    tareas.Input.value = ""
})