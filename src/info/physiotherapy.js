class Workshop{
    constructor(heading,price,themecolor,variant,what_will_you_learn,date,time,venue){
        this.heading=heading;
        this.price=price;
        this.themecolor=themecolor;
        this.variant=variant;
        this.what_will_you_learn=what_will_you_learn;
        this.date=date;
        this.time=time;
        this.venue=venue;
    }
}

const data_of_workshop=[
    new Workshop("ambulance services",100,'rgb(230,143,25)','warning','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor libero placeat nobis delectus reprehenderit tempore facere eaque unde','12/12/12','12:30 pm','Auditorium.')
]

export default data_of_workshop