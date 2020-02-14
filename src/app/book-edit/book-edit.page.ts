import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.page.html',
  styleUrls: ['./book-edit.page.scss'],
})
export class BookEditPage implements OnInit {
  book: any = {};
  bookId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router) {
    this.getData();
  }
  ngOnInit() { }

  // ngOnInit() { console.log('page 1 ngOnInit') }
  // ngOnDestroy() { console.log('page 1 ngOnDestroy') }
  // ionViewWillEnter() { console.log('page 1 ionViewWillEnter') }
  // ionViewDidEnter() { console.log('page 1 ionViewDidEnter') }
  // ionViewWillLeave() { console.log('page 1 ionViewWillLeave') }
  // ionViewDidLeave() { console.log('page 1 ionViewDidLeave') }

  getData() {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBook(this.bookId).subscribe((response) => {
      this.book = response;
    });
  }
  update() {
    this.bookService.updateBook(this.bookId, this.book).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/book-detail/' + this.bookId]);
    })
  }
}
