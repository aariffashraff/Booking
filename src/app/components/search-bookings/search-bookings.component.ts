import {Component, OnInit} from '@angular/core';
import { BookingServiceService } from '../../services/booking.service.service';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {BookingTableComponent} from '../booking-table/booking-table.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-search-bookings',
  imports: [
    ReactiveFormsModule,
    BookingTableComponent,
    HttpClientModule
  ],
  templateUrl: './search-bookings.component.html',
  styleUrl: './search-bookings.component.css'
})
export class SearchBookingsComponent implements OnInit{
  searchForm!: FormGroup;
  columns: string[] = [];
  tableData: any[] = [];

  constructor(private fb: FormBuilder, private bookingService: BookingServiceService) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      vendor: [''],
      from: [''],
      until: ['']
    });
}
  onSearch(): void {
    const filters = this.searchForm.value;
    this.bookingService.searchBookings(filters).subscribe((response: { data: any[]; columns: string[]; }) => {
      this.tableData = response.data;
      this.columns = response.columns;
    });
  }
}
