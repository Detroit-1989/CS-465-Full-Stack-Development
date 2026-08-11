import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient) {}

  

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]> (
      `http://localhost:3000/api/trips`
    );
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip> (
      'http://localhost:3000/api/trips', trip
    );
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip> (
      `http://localhost:3000/api/trips/${trip._id}`, trip
    );
  }

  deleteTrip(trip: Trip): Observable<any> {
    return this.http.delete(
      `http://localhost:3000/api/trips/${trip._id}`
    );
  }

}
