import {Routes} from '@angular/router';
import {SearchBookingsComponent} from './components/search-bookings/search-bookings.component';
import {BookingTableComponent} from './components/booking-table/booking-table.component';

export const routes: Routes = [
  {path: 'search-bookings', component: SearchBookingsComponent},
  {path: 'booking-table', component: BookingTableComponent},
];
