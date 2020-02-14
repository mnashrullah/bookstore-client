import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { Book } from '../interface/book.interface';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.page.html',
  styleUrls: ['./book-add.page.scss'],
})
export class BookAddPage implements OnInit {
  book: Book = {
    id: '',
    title: '',
    description: '',
    images: '',
    created_at: ''
  }

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }
  submit(book) {
    console.log(book)
    console.log(this.book);
    this.bookService.createBook(this.book).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/tabs/tab2']);
    })
  }
}
