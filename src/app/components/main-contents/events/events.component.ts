import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventsComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Event', 'Date'];
  expandedElement: Event | null | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Event {
  Event: string;
  Date: string;
  url: string;
  description: string;
}

const ELEMENT_DATA: Event[] = [
  {
    Event: 'Rehab Week Workshop',
    Date: "Monday, July 25th",
    url: 'https://www.rehabweek.org/scientific-information/rehabweek-workshops/',
    description: `RehabWeek is a week-long event that brings together different conferences in the field of rehabilitation technology at the same time and place in order to foster cross-disciplinary communication and the development of relationships between different players.`,
  },
];
