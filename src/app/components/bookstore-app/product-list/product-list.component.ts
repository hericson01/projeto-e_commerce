import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
  }

}
