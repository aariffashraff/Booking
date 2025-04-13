import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  constructor(private httpClient: HttpClient) {}

  searchBookings(filters: any): Observable<any> {
    return this.httpClient.post('/api/bookings/search', filters); // Adjust API as needed
  }
}
