import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data';
import {Trip} from '../models/trip';
import {TripCard} from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {

  trips: Trip[] = [];

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        console.log('Trips received:', value);
        alert(JSON.stringify(value));
        this.trips = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}