import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../../models/book.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultsComponent {
  @Input() bookings: Booking[] = [];
}
