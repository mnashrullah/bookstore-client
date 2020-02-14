import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.page.html',
  styleUrls: ['./book-add.page.scss'],
})
export class BookAddPage implements OnInit {
  book: any = {}
  constructor(private bookService: BookService, private router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  submit() {
    this.bookService.createBook(this.book).subscribe((response) => {
      console.log(response);
      this.modalCtrl.dismiss();
    })
  }
}
