import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  @Input() breadcrumb: Array<string>;
  @Output() emitLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router : Router) {
  }

  ngOnInit() {
  }

  simulateLoading(url: string) {
    this.emitLoading.emit(true);
    setTimeout(() => {
      this.emitLoading.emit(false);
    }, 500);
    window.scroll(0,0);
    this.router.navigate([url]);
  }
}
