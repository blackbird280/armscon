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
    new Workshop("DiagnoPath",40,'rgb(30,103,225)','primary',`● FNAC (original tissue feel Models)
    ● Blood Bank and Cross section
    ● Tissue Processing(Biopsy)
    ● Frozen Section
    ● choosing the test modality  
        in different conditions.`,'12/12/12','12:30 pm','Lecture theatre 1.'),
]

export default data_of_workshop