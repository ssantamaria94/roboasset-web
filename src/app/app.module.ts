import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table'; 

import { HeaderComponent } from './components/header/header.component';
import { ContentTabComponent } from './components/content-tab/content-tab.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/main-contents/about/about.component';
import { PublicationsComponent } from './components/main-contents/publications/publications.component';
import { PeopleComponent } from './components/main-contents/people/people.component';
import { EventsComponent } from './components/main-contents/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentTabComponent,
    FooterComponent,
    AboutComponent,
    PublicationsComponent,
    PeopleComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
