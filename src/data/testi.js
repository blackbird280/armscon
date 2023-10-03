import vc from '../assets/vs (1).jpg'
import dean from '../assets/director (1).jpg'
import director from '../assets/dean (1).jpg';
import daa from '../assets/daa.jpg';
import dsw from '../assets/dsw.jpg';
import pp from '../assets/pricinpal.jpg';
import reg from '../assets/reg.png'
class Testimonials{
    constructor(headname,content,fulldata,subheading,name,imgsrc){
        this.headname=headname;
        this.content=content;
        this.fulldata=fulldata
        this.subheading=subheading;
        this.name=name;
        
        this.imgsrc=imgsrc
    }
}

const testimonials=[
    new Testimonials(`(Prof.) Dr. Anita Saxena`,[
        `It gives me immense pleasure to know that the students of the university along with their staff representatives have come forward for organizing the 9th edition of Annual Rohtak Medical Students Conference 2023 (ARMSCON 2023) from October 19Th to 21st, 2023. The students are very much enthusiastic for holding the ARMSCON as it holds great potential for networking, collaboration, and showcasing the latest advancements in the medical field.`],`It gives me immense pleasure to know that the students of the university along with their staff representatives have come forward for organizing the 9th edition of Annual Rohtak Medical Students Conference 2023 (ARMSCON 2023) from October 19Th to 21st, 2023. The students are very much enthusiastic for holding the ARMSCON as it holds great potential for networking, collaboration, and showcasing the latest advancements in the medical field.	 

        This event is mixture of both academic and cultural activities where students of all affiliated medical colleges are invited. Various workshops and cultural events are organized during the event. Such types of activities are indeed the basic necessity for overall development of medical students where they can learn and enjoy.
        
        I am very excited to attend this conference as it brings together experts from various specialties, creating a platform for knowledge, exchange of ideas and innovation. It is a great opportunity to stay updated on the latest research and technologies. I am quite confident that this event will provide an opportunity to learn through various workshops and also give them platform to show their talent.
         
        I congratulate the Organizing Committee for their sincere efforts in organizing this event and wish the event a great success.
        `,`Pt. B. D. Sharma UHS`,`Hon'ble Vice Chancellor`,vc),

    new Testimonials('Dr. H. K. Aggarwal',["This conference is a breath of fresh air! The inclusion of cultural activities alongside medical sessions create a dynamic and engaging environment. It's a chance for medical professionals to connect on a deeper level, fostering collaboration and understanding across different backgrounds.As a Registrar of University of Health Sciences, I'm extremely proud of the rich tradition of providing practical, experiential-based medical education that our university has upheld since its founding."],`This conference is a breath of fresh air! The inclusion of cultural activities alongside medical sessions create a dynamic and engaging environment. It's a chance for medical professionals to connect on a deeper level, fostering collaboration and understanding across different backgrounds. As a Registrar of University of Health Sciences, I'm extremely proud of the rich tradition of providing practical, experiential-based medical education that our university has upheld since its founding. Knowing that the students of various colleges in our University have once again come together to celebrate another such event full of innovation, recreation and brainstorming in form of a conference, gives me a sense of happiness and cheerfulness.`,'Pt. B. D. Sharma UHS','Registrar',reg),
    new Testimonials('Dr. S. S. Lohchab',[`ARMSCON, India's largest UG medical conference is a three days event showcasing the abilities of the students in the fields that reach beyond our textbooks and conventional lectures. This event will include some of the best workshops giving young minds a great hands-on experience and a wonderful opportunity for learning and enhancing their skills as professionals to be.This event has a unique blend of educational sessions, interactive workshops, and fun activities.`],`ARMSCON, India's largest UG medical conference is a three days event showcasing the abilities of the students in the fields that reach beyond our textbooks and conventional lectures. This event will include some of the best workshops giving young minds a great hands-on experience and a wonderful opportunity for learning and enhancing their skills as professionals to be. This event has a unique blend of educational sessions, interactive workshops, and fun activities. It's not just about learning; it's about fostering a sense of community among medical professionals. I welcome you to be a part of this learning feast.`,'Pt. B. D. Sharma PGIMS','Director',director),
    new Testimonials('Dr. Ashok Chauhan',[`I am thrilled to endorse the upcoming edition of ARMSCON. The conference promises to be a hub of knowledge and innovation. With renowned speakers, informative workshops, and engaging sessions, attendees will have the opportunity to expand their understanding of the medical field and stay up-to-date with the latest advancements. Additionally, the inclusion of cultural activities adds an exciting dimension to the event, allowing participants to immerse themselves in the rich diversity of our community. `],`I am thrilled to endorse the upcoming edition of ARMSCON. The conference promises to be a hub of knowledge and innovation. With renowned speakers, informative workshops, and engaging sessions, attendees will have the opportunity to expand their understanding of the medical field and stay up-to-date with the latest advancements. Additionally, the inclusion of cultural activities adds an exciting dimension to the event, allowing participants to immerse themselves in the rich diversity of our community. I would like to express my gratitude to the organizers for their hard work and dedication to creating such a comprehensive and inclusive conference. I have no doubt that this event will be a resounding suecess, fostering collaboration, inspiring creativity, and nurturing the holistic development of medical professionals.`,'Pt. B. D. Sharma UHS','Dean Academic Affairs',daa),

    new Testimonials('Dr. Sanjay Tewari',[`ARMSCON promises to be a remarkable amalgamation of academic excellence and cultural vibrancy. The conference offers a unique platform for students to engage with distinguished healthcare professionals, exchange knowledge and gain valuable insights into the latest advancements in the field. The inclusion of dental workshops adds an exciting dimension, allowing participants to enhance their skills, learn new techniques and stay updated with the latest trends in dental care. `],`ARMSCON promises to be a remarkable amalgamation of academic excellence and cultural vibrancy. The conference offers a unique platform for students to engage with distinguished healthcare professionals, exchange knowledge and gain valuable insights into the latest advancements in the field. The inclusion of dental workshops adds an exciting dimension, allowing participants to enhance their skills, learn new techniques and stay updated with the latest trends in dental care. I request all the students to actively participate in this event as it presents an unparalleled opportunity to expand their horizons, build professional networks and showcase their talents. with a perfect blend of academic sessions and cultural festivities, this conference is sure to leave a lasting impact on everyone involved.`,'Pt. B. D. Sharma PGIDS','Principal',pp),

    new Testimonials('Dr. K. S. Laller',[`Pt. B. D. Sharma PGIMS is the academic heart of Pt. B. D. Sharma University of Health Sciences, Rohtak. It offers students a journey of learning and discovery into cognitive learning and social medical etiquettes and the values of service- the fundamental disciplines that underlie the contemporary knowledgecreation. `],`Pt. B. D. Sharma PGIMS is the academic heart of Pt. B. D. Sharma University of Health Sciences, Rohtak. It offers students a journey of learning and discovery into cognitive learning and social medical etiquettes and the values of service- the fundamental disciplines that underlie the contemporary knowledgecreation. Our efforts are enhanced by the vital involvement of students in the good faith to train themselves into competent, compassionate and caring health care professionals through excellence in learning, patient care and medical research. Let ARMSCON become a platform for healthy interactions between the students of different colleges and the faculties.`,'Pt. B. D. Sharma PGIMS','Dean',dean),

    

    new Testimonials('Dr. Gajendra Singh',[`ARMSCON is a fantastic opportunity for our students to showcase their talents, learn from experts in the medical field, and immerse themselves in a diverse cultural experience. The conference offers a perfect balance between academic enrichment and cultural exploration. Our delegates will have access to insightful lectures, interactive workshops and engaging panel discussions that that will broaden their`],`﻿

    ARMSCON is a fantastic opportunity for our students to showcase their talents, learn from experts in the medical field, and immerse themselves in a diverse cultural experience. The conference offers a perfect balance between academic enrichment and cultural exploration. Our delegates will have access to insightful lectures, interactive workshops and engaging panel discussions that that will broaden their
    understanding of medicine and inspire them to excel in their chosen fields. The inclusion of cultural activities adds an exciting element, allowing our students to celebrate their heritage and appreciate the rich tapestry of our community. I have no doubt that this conference will be a resounding success, leaving & lasting impact on our students.`,'Pt. B. D. Sharma UHS',"Dean Students' Welfare",dsw)
];

export default testimonials;
