import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import {EventsListComponent, EventThumbnailComponent, EventService , EventDetailsComponent, CreateEventComponent, EventsListResolver,EventRouteActivator} from './events/index'
import { Error404Component } from './errors/404.component';
import { ToastrService } from './../common/toastr.service';
import { NavBarComponent } from './nav/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './app.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,
  RouterModule.forRoot(appRoutes)],
  providers: [EventService, ToastrService, EventRouteActivator,
EventsListResolver,AuthService,
  {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  
  
  ],
  declarations: [
    Error404Component,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],

  bootstrap: [EventsAppComponent],
})
export class AppModule {

}
export function checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty)
  return window.confirm('You you have not saved this event, do you really want to cancel?');
  return true;
}