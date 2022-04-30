import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  title = 'Card View Demo';
  gridColumns = 3;

  people = [
    {
    "name": "Alberto Jardón Huete", 
    "position": "Senior Researcher in the Department of Systems Engineering and Automation and Director of the Assistive Robotics Laboratory", 
    "description": "Associate professor and Senior Researcher in the Department of Systems Engineering and Automation and Director of the Assistive Robotics Laboratory at the PCT-Leganés. He has recognised experience in the design and development of service robots and support systems. He has made a highly prolific scientific contribution, through 37 journals and more than 120 publications in top-level international conferences, as these are conferences recognised for their high quality, blind peer review, very low acceptance rate (in some cases less than 30%) and high number of citations received, such as ICRA, IROS, RSS, Humanoids, ISARC, DRT4all, etc.",
    "image": "ajardon.jpg", 
    "email": "ajardon@ing.uc3m.es"
  },
  {
    "name": "Juan G. Victores", 
    "position": "PhD in Robotics and AI - Associate Professor at Universidad Carlos III", 
    "description": "Assistant Professor at UC3M.\nPhD in Robotics and AI - Researcher at RoboticsLab (UC3M).\nRobotics Society RD Responsible at ASROB (UC3M)",
    "image": "juang.jpg", 
    "email": "jcgvicto@ing.uc3m.es"
  },
  {
    "name": "Bartek Łukawski", 
    "position": "Research Assistant", 
    "description": "Open source programmer and collaborator at RoboticsLab since 2016.",
    "image": "bartek.jpg", 
    "email": "blukawsk@ing.uc3m.es"
  },
  {
    "name": "Edwin Daniel Oña Simbaña", 
    "position": "Ph.D. in electrical engineering, electronics and automation", 
    "description": "From 2013 to 2015, he was a Research Assistant with the Group of Power Electronics Systems, UC3M, for the development of \"ModuFlame\" project (Power electronics applied to transport systems). Since 2015, he has been a Research Assistant with the Robotics Lab, UC3M. His research is focused on automatic methods for assessment of motor function in neurorehabilitation. He collaborated in several projects to improve the quality of life of people, such as RoboCity2030, Pressmatic, RoboHealth and RoboEspas. He has collaborated with the UTS Games Studio during a research visit to the University of Technology Sydney (UTS) to explore the use of Serious Games for the automation of clinical procedures for motor function assessment",
    "image": "edwin.jpg", 
    "email": "eona@ing.uc3m.es"
  },
  {
    "name": "Ignacio Montesino", 
    "position": "Research Assistant", 
    "description": "General Engineer specialized in electronics an automation. Interested in all things Robotics and AI.", 
    "image": "imontesino.jpg", 
    "email": "monte.igna@gmail.com"
  },
  {
    "name": "Iván de la Fuente", 
    "position": "Research Assistant", 
    "description": "I am currently studiyng Robotics and Automation in University Carlos III of Madrid",
    "image": "ifuente.png", 
    "email": "ivandelafuente8@hotmail.com "
  },
  {
    "name": "Sheila Sánchez", 
    "position": "Research Assistant", 
    "description": "I am currently studiyng Robotics and Automation in University Carlos III of Madrid",
    "image": "sheila.jpeg", 
    "email": "shsanche@pa.uc3m.es"
  },
  {
    "name": "Rubén de la Torre Cañizares", 
    "position": "Research Assistant", 
    "description": "Rubén de la Torre Cañizares received the Bachelor's degree in Industrial Electronics and Automation Engineering, from Universidad Carlos III de Madrid in 2013. While he was working in a full-time job, he received the master’s degree in Robotics and Automation from Universidad Carlos III de Madrid in 2017. In 2018, the social purpose of the project convinced him and he started the PhD in Electrical Engineering, Electronics and Automation focusing in Robot-aided rehabilitation systems for patients with spasticity.",
    "image": "rtorre.jpg", 
    "email": "100280166@alumnos.uc3m.es"
  },
  {
    "name": "Hugo Alonso", 
    "position": "Research Assistant", 
    "description": "My name is Hugo Alonso, I've finished my thesis of Bachelor in Industrial Technologies Engineering at Carlos III University of Madrid, focused in development of video games to control them through a EMG Sensor. Now I continue working in Robotics Lab developing Serious Games, to help in rehabilitation of patients affected by nervous system and limbs loss, using optical hand tracking and Virtual Reality immersion, into a collaborative project with a hospital.",
    "image": "halonso.jpg",
     "email": "hualonso@pa.uc3m.es"
  },
  {
    "name": "Patricia Sánchez-Herrera Baeza", 
    "position": "PhD in Physiotherapy, Occupational Therapy, Rehabilitation and Physical Medicine", 
    "description": "Laboratory of Movement Analysis, Biomechanics, Ergonomics and Motor Control at Universidad Rey Juan Carlos",
    "image": "pbaeza.jpg",
     "email": "patricia.sanchezherrera@urjc.es"
  },
  {
    "name": "Alicia Cuesta Gómez", 
    "position": "PhD in Physiotherapy, Occupational Therapy, Rehabilitation and Physical Medicine", 
    "description": "Laboratory of Movement Analysis, Biomechanics, Ergonomics and Motor Control at Universidad Rey Juan Carlos",
    "image": "acuesta.jpg",
     "email": "alicia.cuesta@urjc.es"
  }
  ]

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
