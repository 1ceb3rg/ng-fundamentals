import {
  EventsListResolver,
  EventRouteActivator,
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
} from './events/index';

import { Error404Component } from './errors/404.component';

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },

  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolver },
  },

  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',

    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
