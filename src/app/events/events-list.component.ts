import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail
          (click)="handleThumbnailClick(event.name)"
          [event]="event"
        ></event-thumbnail>
      </div>
    </div>
  </div>`,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route:ActivatedRoute
  ) {}
  ngOnInit() {
      this.events=this.route.snapshot.data['events']
  }
  

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
