import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output('search')
  onSearch = new EventEmitter<string>();

  search = new FormControl('')

  constructor() {
    this.search
      .valueChanges
      .subscribe(
        value => value && this.onSearch.emit(value))
  }
}
