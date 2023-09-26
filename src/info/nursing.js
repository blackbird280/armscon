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
    new Workshop("Assistance in surgery",200,'rgb(200,0,0)','error','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor libero placeat nobis delectus reprehenderit tempore facere eaque unde','12/12/12','12:30 pm','Lecture theatre 1.')
]

export default data_of_workshop