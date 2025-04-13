import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  constructor(private http: HttpClient) {}

  searchBookings(filters: any): Observable<any> {
    return this.http.post('/api/bookings/search', filters); // Adjust API as needed
  }
}
