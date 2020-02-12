import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  books: any;

  constructor(private bookService: BookService, private router: Router) {

  }
  getAll() {
    this.bookService.getAllBooks().subscribe((response) => {
      this.books = response;
      console.log(response);
      console.log(this.books);
    });
  }

  ionViewWillEnter() {
    this.getAll();
  }

  doRefresh(event) {
    this.getAll();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  detail(book) {
    this.router.navigate(['/book-detail/'+book.id]);
  }
}
