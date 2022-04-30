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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
