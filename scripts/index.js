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
    creatyActivity(title, description, imgUrl){
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
repository.creatyActivity("nadar","es relajante","https://www.shutterstock.com/image-photo/competitive-swimmer-racing-pool-260nw-2328320555.jpg")
console.log(repository.getAllActivities())
repository.creatyActivity("correr","es sano","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRc40uetVQqpwU_QAf4GREYlNToJv3pQ0ptWQqhamqpw&s")
console.log(repository.getAllActivities())
repository.creatyActivity("caminar","es saludable","url")
console.log(repository.getAllActivities())
repository.deleteActivity(1)
console.log(repository.getAllActivities());