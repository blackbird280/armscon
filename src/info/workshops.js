class TheWorkShopsCategory{
    constructor(name,heading,id,description,img_src){
        this.name=name;
        this.heading=heading;
        this.id=id;
        this.description=description;
        this.img_src=img_src
    }
}

const first_categories=[
    new TheWorkShopsCategory('halfday workshops','Halfday workshops',1,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor libero placeat nobis delectus reprehenderit tempore facere eaque unde quibusdam inventore cumque quidem.",'https://th.bing.com/th/id/OIP.mVCd2xkpI0QYd2DgAPNz-QHaFj?w=191&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'),
    new TheWorkShopsCategory('Fullday workshops','Fullday workshops',2,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor libero placeat nobis delectus reprehenderit tempore facere eaque unde quibusdam inventore cumque quidem.","https://th.bing.com/th/id/OIP.O0P3Fk9-nJBwTIOn1Nq-IwHaE7?w=301&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
    new TheWorkShopsCategory('Nursing workshops','Nursing workshops',3,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor libero placeat nobis delectus reprehenderit tempore facere eaque unde quibusdam inventore cumque quidem.",'https://th.bing.com/th/id/OIP.a1vy29bds19S7Dez91JbXAHaEn?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'),
    new TheWorkShopsCategory('Pharamacy workshops','Pharmacy workshops',4,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor libero placeat nobis delectus reprehenderit tempore facere eaque unde quibusdam inventore cumque quidem.",'https://th.bing.com/th/id/OIP.k76mgd_41zRE4M5_ocR8sgHaDt?w=344&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7')
]

export default first_categories;