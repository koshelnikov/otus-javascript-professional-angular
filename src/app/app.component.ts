import {Component} from '@angular/core';
import {ProductService} from "./services/product/product.service";
import {
  combineLatest,
  debounceTime,
  delay,
  distinctUntilChanged, map,
  Observable,
  startWith,
  Subject,
  switchMap
} from "rxjs";
import {Product} from "./services/product/product.type";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchPattern$ = new Subject<string>();
  notifier$ = new Subject()
  products$: Observable<Product[]> | null = null;

  constructor(public readonly productService: ProductService) {
    this.products$ = this.searchPattern$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        (inputSource) =>
          combineLatest(
            [inputSource,
              this.notifier$.pipe(startWith(null))]
          ).pipe(
            map(([sourceValue]) => sourceValue),
          ),
        switchMap(
          search => this.productService.getProductsByName(search)))
  }
  onSearchChanged(search: string) {
    this.searchPattern$.next(search)
  }

  refresh() {
    this.notifier$.next(undefined)
  }
}
