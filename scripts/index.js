class Activity {
    constructor(id,tittle, description, imgUrl){
        this.id = id;
        this.tittle = tittle;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities=[];
        this.id=0;
    }
    createActivity(title, description, imgUrl){
        const id = this.id ++;
        const activity = new Activity(id,title,description,imgUrl)
        this.activities.push(activity)
    }

    getAllActivities(){
        return this.activities;
    }

    deleteActivity(id){
        this.activities.splice(id,1)
        return this.activities
    }
}


const repository = new Repository ()

const toHTML = (activity) =>{
    // Extraer propiedades utilizando destructuring
    const { id, title, description, imgUrl } = activity;
  
    // Crear elementos HTML
    const newDiv = document.createElement("div");
    const newTittle = document.createElement("h3");
    const newDescrip = document.createElement("p");
    const newImg = document.createElement("img");
    const deleteButton = document.createElement("button");
  
    // Asignar valores a las propiedades de los elementos
    newTittle.innerHTML = title;
    newDescrip.innerHTML = description;
    newImg.src = imgUrl;
    newImg.alt = title; // Asignar el título como texto alternativo de la imagen
    deleteButton.innerHTML = "Delete";
  
    // Agregar clases CSS a los elementos
    newDiv.classList.add("card_item");
    newTittle.classList.add("title");
    newDescrip.classList.add("description");
    newImg.classList.add("card_img");
    deleteButton.classList.add("btn");
    deleteButton.id = id;
  
    // Agregar un evento de clic al botón de eliminar
    deleteButton.addEventListener("click", () => {
      handleDeleteActivity(id);
    });
  
    // Appendear los elementos al nuevo <div>
    newDiv.appendChild(newImg);
    newDiv.appendChild(newTittle);
    newDiv.appendChild(newDescrip);
    newDiv.appendChild(deleteButton);
  
    // Asignar al <div> la clase CSS correspondiente
    newDiv.classList.add("card_item");
  
    // Retornar el <div> finalizado con todos los elementos
    return newDiv;
  }
  
  const updateCardContainer = () => {
    // Seleccionar el contenedor
    const cardContainer = document.getElementById("cardContainer");
  
    // Vaciar el contenido actual del contenedor
    cardContainer.innerHTML = "";
  
    // Obtener el listado completo de actividades
    const activities = repository.getAllActivities();
  
    // Mapear el listado de actividades para convertirlos en elementos HTML
    const activityElements = activities.map((activity) => toHTML(activity));
  
    // Appendear todos los elementos HTML al contenedor
    cardContainer.append(...activityElements);
  }
  
  // Llamada inicial para actualizar el contenedor con las actividades existentes
  updateCardContainer();
  
  const handlerCreateActivity = (event) => {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
  
    // Seleccionar los inputs de title, description e imgUrl
    const titleInput = document.getElementById("titleInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const urlInput = document.getElementById("urlInput");
  
    // Tomar los valores ingresados en los inputs y guardarlos en variables
    const title = titleInput.value;
    const description = descriptionInput.value;
    const imgUrl = urlInput.value;
  
    // Validar que los valores estén completos
    if (!title || !description || !imgUrl) {
      alert("Por favor, complete todos los campos.");
      return; // Cortar el proceso si hay datos incompletos
    }
  
    // Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad
    repository.createActivity(title, description, imgUrl);
  
    // Invocar la función para refrescar el contenedor de actividades
    updateCardContainer();
  
    // Limpiar los campos del formulario después de agregar la actividad
    titleInput.value = "";
    descriptionInput.value = "";
    urlInput.value = "";
  }
  
  // Obtener el botón mediante su ID
  const addActivityButton = document.getElementById("addActivity");
  
  // Agregar un evento de clic al botón
  addActivityButton.addEventListener("click", handlerCreateActivity);
  
  // Función para manejar la eliminación de actividades
  const handleDeleteActivity = (activityId) => {
    // Llamar al método correspondiente de la instancia de Repository para eliminar la actividad
    repository.deleteActivity(activityId);
  
    // Invocar la función para refrescar el contenedor de actividades
    updateCardContainer();
  }
  







