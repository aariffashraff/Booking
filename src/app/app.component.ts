import { Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/result/result.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchComponent, ResultsComponent],
  template: `
    <div class="container mt-4">
      <app-search (searchResult)="onResults($event)"></app-search>
      <app-results [bookings]="bookings"></app-results>
    </div>
  `,
})
export class AppComponent {
  bookings= [];

  onResults(data: any[]) {

    this.bookings = data;
  }
}
