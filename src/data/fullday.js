class fullday{
    constructor(heading,items,imgsrc){
        this.heading=heading;
        this.items=items;
        this.imgsrc=imgsrc;
    }
}

const fullday_data=[
    [
        new fullday('Emergency and critical care workshop.',['Basic life support.','Advanced cardiovascular life support.'," Airway management.","Crash cart."],"https://th.bing.com/th/id/OIP.tHsUjNSyrDFOu8kCLmRIygHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
        new fullday('Basic Surgical skills',['Suturing skills','Antiseptic dressing,cleaning and draping',"Nasogastric tube and Foley's insertion ","Thoracocentesis and Chest tube insertion","Breast abscess and drainage"],"https://th.bing.com/th/id/OIP.6zLjQneTOEF3w7S4kxNXdAHaE8?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
        new fullday('Basic Obstetrics Skills ',['Normal delivery(Episiotomy)','Contraception ',"Paps","Caesarean section ","artum Haemorrhage","Foley balloon Tamponade","Cervical Tear","Drugs used in pph"],"https://www.obgyn.wisc.edu/media/Page%20Files/RG100365.jpg"),
        new fullday('Oxygenation Workshop',['Oxygen Therapy Devices','Right device for right patient',"Basics of Ventilation"],"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/10/Ventilators_Covid-19_GettyImages1214304800_Feature-732x549.jpg"),
        new fullday("DiagnoPath– Diagnostic Medicine",["FNAC","Blood Bank and Cross Match","Tissue Processing (Biopsy)","Frozen Section","Hematology Machines","Blood Donation"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89O3lCB03BXjr8RGpSzwCxMpxpN1z1Qs7YvwUrnN5D4VkKgmLBK8RP_jHd9qx6C-tj3M&usqp=CAU"),
        new fullday("Research Methodology",["Research and scientific methods","Epidemiological approaches","Data structure","Sampling methodology","Sample size determination","Group work on Research Designs","Group work on statistical approach for data analysis"],"https://www.inmantec.edu/wp-content/uploads/2018/08/img-research-methodology.jpg"),
        new fullday("Integrated Medical Skills",['Basic Life Support','IV Lines','Casts and Splints','Ambulance settings','Anatomy related clay modelling','Embalming'],"https://cpreducatorsinc.com/cms/wp-content/uploads/2018/11/CPR-vs-BLS.jpg")
    ],
    [
        new fullday('Trauma troopers',['Advance Trauma Life Support','Triage',"Splints and Traction","POP Cast and Slabs","Orthosis and Prosthesis","Fixators","X-Rays and Deformities"],"https://www.sawbones.com/media/wysiwyg/sawbones/cms/product/orthopaedic/ortho_main_PI.png"),
        new fullday('Paeds – Endo – Alert ',["Growth monitoring and growth charts","Insulin therapy- Pens and Pumps","Emergencies- Status epilepticus and status asthmaticus","IO cannulation, Intubation in respiratory failures, Defibrillation and Cardioversion"],"https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:eco,w_920/v1/websites4/live-prod/pediatrics/education/fellowships/fellowships-section/endo/YMS1408_051_Pediatrics_29649_53735_v3.jpg"),
        new fullday('Eyes wide  open ',['Live Cataract Surgery','Investigative procedures in Ophthalmology',"Ophthalmoscopy","Orthoptics","Retinoscopy and refraction"],"https://myvision.org/wp-content/uploads/2022/04/woman-getting-laser-cataract-surgery.jpg"),
        new fullday('Know your steth',['Journey of Stethoscope','Body surface markings of Precordium',"Heart Sounds and Breath Sounds","B.P. Measurement"],"https://media.defense.gov/2021/May/27/2002731612/-1/-1/0/210527-A-AB123-001.JPG"),
        new fullday('Ataraxia – Calm into chaos',['Ice Breaking with movements','Rhythm and movement with music',"Scribble, Mirroring, prompt writing","Token of gratitude and post card"],""),
        new fullday('Inside the autopsy room',['Medicolegal report and Post Mortem Report','Live Autopsy',"Knowing the weapons","Sample Preservation","Moot court"],"https://media.npr.org/assets/img/2011/12/15/new-mexico-forensics2_wide-a581f943e255d3aebfc50438e250d67fc7fdad16-s1400-c100.jpg"),
        new fullday('ECG : Got a rhythm?',['Normal ECG (Lead placement)','Acute Coronary Syndrome',"Sinus rhythm/Arrhythmia","Conduction Defects","ECG strip reading"],"https://nationalcertifications.org/wp-content/uploads/2020/03/how-to-become-an-ekg-technician-750x425.jpg"),
        new fullday('Essential Neonatal Skills',['Neonatal Resuscitation Programme session','Feeding of Newborn',"Kangaroo Mother Care","Neonatal Reflexes","Identification of danger signs in newborn","Lumbar Puncture"],"https://www.cascadetraining.com/assets/images/blog/nrp-neonatal-resuscitation-course.png"),
        new fullday('Disaster Prep - Lab',["Fire Drill","Cyber Crime ","State Disaster Relief Fund Drill"],"https://www.pointsoflight.org/wp-content/uploads/2018/09/mayflower_arizona_disaster_relief.jpg"),
        new fullday('Radiology 101',['Clinical approach to radiology and imaging','Case discussion','Visit to Imaging Lab, nuclear medicine lab'],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ78cXSXoIr-mNd9eqwPnFTK5gs0ypz9t_GUfIBBNKdBskRcdpMccv-XO4AwaFalWt1uw&usqp=CAU")
    ],
    [
      new fullday("BASIC & ADVANCED IMPLANTOLOGY",["Lecture on basic implantology","Daignosis and treatment planning","advance implantology - live zygomatic implant surgery","HANDS ON - Acrylic mandible.","Hands on - Acrylic mandible"],"https://davincismiles.com.au/wp-content/uploads/2023/03/Dental-Bridges-scaled.jpg")  
    ],
    [
        new fullday('Mobilisation of Nervous System ',['October 19 ,2023'],"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/4/shutterstock_By_ESB_Professional.jpg"),
        new fullday('Fitness testing in Sports Persons',['October 20,2023'],"https://blog.acharya.ac.in/wp-content/uploads/2021/07/sports_injuries.jpg"),
        
    ],
    ['Basic Life support',[''],'https://th.bing.com/th/id/OIP.CFr8FMF-w5Bwu_0qNqpJ8QHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7']
    
]
export default fullday_data