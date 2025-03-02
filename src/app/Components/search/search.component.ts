import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() searchTermChange = new EventEmitter<string>();

  onSearchChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchTermChange.emit(inputValue);
  }
}
