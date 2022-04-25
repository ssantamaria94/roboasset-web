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
    "name": "Jhon Doe", 
    "position": "Phd. in None", 
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet odio elit, non congue ante auctor faucibus. In hac habitasse platea dictumst. In ac eros id dui lacinia rhoncus. Etiam porttitor molestie nibh, ut pretium nisl tincidunt non. Duis ac turpis nec tortor lobortis commodo in eu mauris. Aenean aliquam elit ut mi venenatis, in molestie nunc imperdiet. Ut vel vehicula ligula, et dignissim est. Donec congue at ante sed vehicula. Cras vehicula, massa sed lacinia accumsan, turpis mauris rutrum augue, lacinia suscipit nisl leo volutpat neque. Aliquam neque lectus, mattis eu ligula vehicula, aliquet ornare nunc.",
    "image": "jhon_doe.jpg", 
    "email": "jhon.doe@pa.uc3m.es"
  },
  {
    "name": "Jhon Doe", 
    "position": "Phd. in None", 
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet odio elit, non congue ante auctor faucibus. In hac habitasse platea dictumst. In ac eros id dui lacinia rhoncus. Etiam porttitor molestie nibh, ut pretium nisl tincidunt non. Duis ac turpis nec tortor lobortis commodo in eu mauris. Aenean aliquam elit ut mi venenatis, in molestie nunc imperdiet. Ut vel vehicula ligula, et dignissim est. Donec congue at ante sed vehicula. Cras vehicula, massa sed lacinia accumsan, turpis mauris rutrum augue, lacinia suscipit nisl leo volutpat neque. Aliquam neque lectus, mattis eu ligula vehicula, aliquet ornare nunc.",
    "image": "jhon_doe.jpg", 
    "email": "jhon.doe@pa.uc3m.es"
  },
  {
    "name": "Jhon Doe", 
    "position": "Phd. in None", 
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet odio elit, non congue ante auctor faucibus. In hac habitasse platea dictumst. In ac eros id dui lacinia rhoncus. Etiam porttitor molestie nibh, ut pretium nisl tincidunt non. Duis ac turpis nec tortor lobortis commodo in eu mauris. Aenean aliquam elit ut mi venenatis, in molestie nunc imperdiet. Ut vel vehicula ligula, et dignissim est. Donec congue at ante sed vehicula. Cras vehicula, massa sed lacinia accumsan, turpis mauris rutrum augue, lacinia suscipit nisl leo volutpat neque. Aliquam neque lectus, mattis eu ligula vehicula, aliquet ornare nunc.",
    "image": "jhon_doe.jpg", 
    "email": "jhon.doe@pa.uc3m.es"
  },
  {
    "name": "Jhon Doe", 
    "position": "Phd. in None", 
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet odio elit, non congue ante auctor faucibus. In hac habitasse platea dictumst. In ac eros id dui lacinia rhoncus. Etiam porttitor molestie nibh, ut pretium nisl tincidunt non. Duis ac turpis nec tortor lobortis commodo in eu mauris. Aenean aliquam elit ut mi venenatis, in molestie nunc imperdiet. Ut vel vehicula ligula, et dignissim est. Donec congue at ante sed vehicula. Cras vehicula, massa sed lacinia accumsan, turpis mauris rutrum augue, lacinia suscipit nisl leo volutpat neque. Aliquam neque lectus, mattis eu ligula vehicula, aliquet ornare nunc.",
    "image": "jhon_doe.jpg", 
    "email": "jhon.doe@pa.uc3m.es"
  },
  {
    "name": "Jhon Doe", 
    "position": "Phd. in None", 
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet odio elit, non congue ante auctor faucibus. In hac habitasse platea dictumst. In ac eros id dui lacinia rhoncus. Etiam porttitor molestie nibh, ut pretium nisl tincidunt non. Duis ac turpis nec tortor lobortis commodo in eu mauris. Aenean aliquam elit ut mi venenatis, in molestie nunc imperdiet. Ut vel vehicula ligula, et dignissim est. Donec congue at ante sed vehicula. Cras vehicula, massa sed lacinia accumsan, turpis mauris rutrum augue, lacinia suscipit nisl leo volutpat neque. Aliquam neque lectus, mattis eu ligula vehicula, aliquet ornare nunc.",
    "image": "jhon_doe.jpg", 
    "email": "jhon.doe@pa.uc3m.es"
  }
  ]

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
