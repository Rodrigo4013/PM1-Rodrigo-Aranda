class Activity {
    constructor(id,tittle, description, imgUrl){
        this.id = id;
        this.tittle = tittle;
        this.description = description;
        this.imgUrl = imgUrl;

    }
}

class Repository{
    constructor(activities){
        this.activities=[];
    }


    creatyActivity(activity){
        this.activities.push(activity)
    }

    getAllActivities(){
        return this.activities;
    }

    deleteActivity(id,eliminar){
        this.activities.splice((id-1),eliminar)
        return this.activities

    }
}

const activity1 = new Activity (1,"Caminar","Es sano","https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.cofm.es%2Fbeneficios-salir-caminar-diariamente%2F&psig=AOvVaw2dS9jkAebi5ljrSfVcss_4&ust=1708235448311000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJilrorXsYQDFQAAAAAdAAAAABAR")
const repository = new Repository ()
// console.log(repository);
repository.creatyActivity(activity1)
// repository.getAllActivities()
const activity2 = new Activity (2, "Nadar", "Es relajante","https://www.shutterstock.com/image-photo/competitive-swimmer-racing-pool-260nw-2328320555.jpg")
repository.creatyActivity(activity2)

const activity3 = new Activity (3, "Dormir", "Es satisfactorio","https://media.istockphoto.com/id/1326080733/es/foto/joven-guapo-durmiendo-en-la-cama.jpg?s=612x612&w=0&k=20&c=sU0kuKpL-RTBvn6iyUmsi8WBf0VdswlCbR6NykXllW0=")

repository.creatyActivity(activity3)
console.log(repository.getAllActivities());
repository.deleteActivity(2,1)
console.log(repository.getAllActivities());

