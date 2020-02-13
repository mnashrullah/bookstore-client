import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  book: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    let bookId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBook(bookId).subscribe((response) => {
      console.log(response);
      this.book = response
    })
  }
  ngOnInit() { }

}
