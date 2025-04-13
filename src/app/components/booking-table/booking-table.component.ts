import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-booking-table',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './booking-table.component.html',
  styleUrl: './booking-table.component.css'
})
export class BookingTableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
}
