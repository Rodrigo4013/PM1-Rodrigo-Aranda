class Activity {
    constructor(id,title, description, imgUrl){
        this.id = id;
        this.title = title;
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
    const titleHtml = document.createElement("h3");
    const descriptionHtml = document.createElement("p");
    const imgHtml = document.createElement("img");
    
  
    // Asignar valores a las propiedades de los elementos
    titleHtml.innerHTML = title;
    descriptionHtml.innerHTML = description;
    imgHtml.src = imgUrl;


    const card = document.createElement('div')


    //se necesita crear una clase en css
    card.className = 'card'
    card.id = id;


    card.appendChild(titleHtml)
    card.appendChild(descriptionHtml)
    card.appendChild(imgHtml)

    return card
  }
  

  const builActivities = () => {
    const cardsContainer = document.getElementById("cardsContainer")
    cardsContainer.innerHTML = ""

    const allActivities = repository.getAllActivities()

    const htlmActivities = allActivities.map((activity)=>
        toHTML(activity)
    )

    htlmActivities.forEach((activityHTML)=>
        cardsContainer.appendChild(activityHTML)
    ) 
    
}

const handleClick = (event) => {
    event.preventDefault();
    const title = document.getElementById('title')
    const description = document.getElementById('description')
    const imgUrl = document.getElementById('imgUrl')

    let titleValue = title.value
    let descriptionValue = description.value
    let imgUrlValue = imgUrl.value

    //validation
    if(!titleValue || !descriptionValue || !imgUrlValue){
        alert("llena todos los campos")
        return;
    }

    repository.createActivity(titleValue,descriptionValue,imgUrlValue)

    builActivities()

    clearFields()

}

const clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('imgUrl').value = '';
};

const buttonSubmit = document.getElementById("submitButton")
buttonSubmit.addEventListener('click',handleClick);




