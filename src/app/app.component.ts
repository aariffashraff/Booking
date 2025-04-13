import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookingTableComponent} from './components/booking-table/booking-table.component';
import {SearchBookingsComponent} from './components/search-bookings/search-bookings.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookingTableComponent, SearchBookingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Booking';
}
