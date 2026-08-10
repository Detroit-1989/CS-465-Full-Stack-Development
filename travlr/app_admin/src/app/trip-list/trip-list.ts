import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data';
import {Trip} from '../models/trip';
import {TripCard} from '../trip-card/trip-card';
import {TripEdit} from '../trip-edit/trip-edit';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCard, TripEdit],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {

  trips: Trip[] = [];
  selectedTrip?: Trip;

  editTrip(trip: Trip): void {

    console.log('Selected trip:', trip)
    this.selectedTrip = trip;

  }

  constructor(private tripDataService: TripDataService, private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {

    this.tripDataService.getTrips().subscribe({

      next: (value: Trip[]) => {

        console.log('API VALUE:', value);
        console.log('API LENGTH:', value.length);

        this.trips = value;
        this.cdr.markForCheck();

        console.log('TRIPS AFTER ASSIGNMENT:', this.trips);
        console.log('TRIPS LENGTH AFTER ASSIGNMENT', this.trips.length);

      },
      error: (err) => {

        console.error(err);
        alert(JSON.stringify(err))

      }
    });
  }
}