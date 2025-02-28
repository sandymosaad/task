import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
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
