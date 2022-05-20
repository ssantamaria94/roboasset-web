import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publications = [
    {
      "title": "Effects of EMG-Controlled Video Games on the Upper Limb Functionality in Patients with Multiple Sclerosis: A Feasibility Study and Development Description",
      "authors": "Edwin Daniel Oña, Selena Marcos-Antón, Dorin-Sabin Copaci, Janeth Arias, Roberto Cano-de-la-Cuerda and Alberto Jardón",
      "abstract": "Multiple sclerosis (MS) is the most common inflammatory neurological disease in young adults, with a high prevalence worldwide (2.8 million people). To aid in the MS treatment, using VR tools in cognitive and motor rehabilitation of such disease has been growing progressively in the last years. However, the role of VR as a rehabilitative tool in MS treatment is still under debate. This paper explores the effects of VR training using EMG activation in upper limb functionality. An experimental training protocol using video games controlled using an MYO armband sensor was conducted in a sample of patients with MS. Results support the use of EMG-commanded video games as a rehabilitative tool in patients with MS, obtaining favorable outcomes related to upper limb functionality and satisfaction.",
      "url": "https://doi.org/10.1155/2022/3735979"
    },
    {
      "title": "Neural Style Transfer with Twin-Delayed DDPG for Shared Control of Robotic Manipulators",
      "authors": "Raul Fernandez-Fernandez, Marco Aggravi, Paolo Giordano, Juan Victores and Claudio Pacchierotti",
      "abstract": "Neural Style Transfer (NST) refers to a class of algorithms able to manipulate an element, most often images, to adopt the appearance or style of another one. Each element is defined as a combination of Content and Style: the Content can be conceptually defined as the \"what\" and the Style as the \"how\" of said element. In this context, we propose a custom NST framework for transferring a set of styles to the motion of a robotic manipulator, e.g., the same robotic task can be carried out in an \"angry\", \"happy\", \"calm\", or \"sad\" way. An autoencoder architecture extracts and defines the Content and the Style of the target robot motions. A Twin Delayed Deep Deterministic Policy Gradient (TD3) network generates the robot control policy using the loss defined by the autoencoder. The proposed Neural Policy Style Transfer TD3 (NPST3 3) alters the robot motion by introducing the trained style. Such an approach can be implemented either offline, for carrying out autonomous robot motions in dynamic environments, or online, for adapting at runtime the style of a teleoperated robot. The considered styles can be learned online from human demonstrations. We carried out an evaluation with human subjects enrolling 73 volunteers, asking them to recognize the style behind some representative robotic motions. Results show a good recognition rate, proving that it is possible to convey different styles to a robot using this approach. ",
      "url": "https://hal.inria.fr/hal-03584085/"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
