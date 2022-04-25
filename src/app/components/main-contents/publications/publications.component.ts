import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publications = [
    {
      "title": "Change Detection Using Weighted Features for Image-Based Localization",
      "authors": "C. Gómez, Erik Derner, A. C. Hernández, R. Babuuka, R. Barber",
      "abstract": "Autonomous mobile robots are becoming increasingly important in many industrial and domestic environments. Dealing with unforeseen situations is a difficult problem that must be tackled to achieve long-term robot autonomy. In vision-based localization and navigation methods, one of the major issues is the scene dynamics. The autonomous operation of the robot may become unreliable if the changes occurring in dynamic environments are not detected and managed. Moving chairs, opening and closing doors or windows, replacing objects and other changes make many conventional methods fail. To deal with these challenges, we present a novel method for change detection based on weighted local visual features. The core idea of the algorithm is to distinguish the valuable information in stable regions of the scene from the potentially misleading information in the regions that are changing. We evaluate the change detection algorithm in a visual localization framework based on feature matching by performing a series of long-term localization experiments in various real-world environments. The results show that the change detection method yields an improvement in the localization accuracy, compared to the baseline method without change detection. In addition, an experimental evaluation on a public long-term localization data set with more than 10 000 images reveals that the proposed method outperforms two alternative localization methods on images recorded several months after the initial mapping."
    },
    {
      "title": "Change Detection Using Weighted Features for Image-Based Localization",
      "authors": "C. Gómez, Erik Derner, A. C. Hernández, R. Babuuka, R. Barber",
      "abstract": "Autonomous mobile robots are becoming increasingly important in many industrial and domestic environments. Dealing with unforeseen situations is a difficult problem that must be tackled to achieve long-term robot autonomy. In vision-based localization and navigation methods, one of the major issues is the scene dynamics. The autonomous operation of the robot may become unreliable if the changes occurring in dynamic environments are not detected and managed. Moving chairs, opening and closing doors or windows, replacing objects and other changes make many conventional methods fail. To deal with these challenges, we present a novel method for change detection based on weighted local visual features. The core idea of the algorithm is to distinguish the valuable information in stable regions of the scene from the potentially misleading information in the regions that are changing. We evaluate the change detection algorithm in a visual localization framework based on feature matching by performing a series of long-term localization experiments in various real-world environments. The results show that the change detection method yields an improvement in the localization accuracy, compared to the baseline method without change detection. In addition, an experimental evaluation on a public long-term localization data set with more than 10 000 images reveals that the proposed method outperforms two alternative localization methods on images recorded several months after the initial mapping."
    },
    {
      "title": "Change Detection Using Weighted Features for Image-Based Localization",
      "authors": "C. Gómez, Erik Derner, A. C. Hernández, R. Babuuka, R. Barber",
      "abstract": "Autonomous mobile robots are becoming increasingly important in many industrial and domestic environments. Dealing with unforeseen situations is a difficult problem that must be tackled to achieve long-term robot autonomy. In vision-based localization and navigation methods, one of the major issues is the scene dynamics. The autonomous operation of the robot may become unreliable if the changes occurring in dynamic environments are not detected and managed. Moving chairs, opening and closing doors or windows, replacing objects and other changes make many conventional methods fail. To deal with these challenges, we present a novel method for change detection based on weighted local visual features. The core idea of the algorithm is to distinguish the valuable information in stable regions of the scene from the potentially misleading information in the regions that are changing. We evaluate the change detection algorithm in a visual localization framework based on feature matching by performing a series of long-term localization experiments in various real-world environments. The results show that the change detection method yields an improvement in the localization accuracy, compared to the baseline method without change detection. In addition, an experimental evaluation on a public long-term localization data set with more than 10 000 images reveals that the proposed method outperforms two alternative localization methods on images recorded several months after the initial mapping."
    },
    {
      "title": "Change Detection Using Weighted Features for Image-Based Localization",
      "authors": "C. Gómez, Erik Derner, A. C. Hernández, R. Babuuka, R. Barber",
      "abstract": "Autonomous mobile robots are becoming increasingly important in many industrial and domestic environments. Dealing with unforeseen situations is a difficult problem that must be tackled to achieve long-term robot autonomy. In vision-based localization and navigation methods, one of the major issues is the scene dynamics. The autonomous operation of the robot may become unreliable if the changes occurring in dynamic environments are not detected and managed. Moving chairs, opening and closing doors or windows, replacing objects and other changes make many conventional methods fail. To deal with these challenges, we present a novel method for change detection based on weighted local visual features. The core idea of the algorithm is to distinguish the valuable information in stable regions of the scene from the potentially misleading information in the regions that are changing. We evaluate the change detection algorithm in a visual localization framework based on feature matching by performing a series of long-term localization experiments in various real-world environments. The results show that the change detection method yields an improvement in the localization accuracy, compared to the baseline method without change detection. In addition, an experimental evaluation on a public long-term localization data set with more than 10 000 images reveals that the proposed method outperforms two alternative localization methods on images recorded several months after the initial mapping."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
