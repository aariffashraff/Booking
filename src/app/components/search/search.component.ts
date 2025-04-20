import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Booking } from '../../models/book.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchResults = new EventEmitter<Booking[]>();
  searchForm!: FormGroup;
  @Output() searchResult = new EventEmitter<any[]>();

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      show: ['RESERVATION'],
      vendor: ['All'],
      bookingChannel: ['All'],
      from: [''],
      until: [''],
      include: ['Bookings that Arrive, Depart and Stay during these dates'],
      hideCancelled: [true]
    });
  }

  onSearch(): void {
    const params = new HttpParams({ fromObject: this.searchForm.value });
    this.http.get<Booking[]>('https://api.example.com/search-bookings', { params }).subscribe(
      data => this.searchResults.emit(data),
      err => console.error(err)
    );
  }
}
