//src/app/book-add/book-add.page.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.page.html',
  styleUrls: ['./book-add.page.scss'],
})
export class BookAddPage implements OnInit {
  book: any = {}
  constructor(
    private bookService: BookService,
    private modalCtrl: ModalController,
    private utils: UtilsService
  ) { }

  ngOnInit() { }
  submit() {
    this.bookService.createBook(this.book).subscribe((response) => {
      console.log(response);
      this.utils.showToast('Berhasil ditambahkan');
      this.modalCtrl.dismiss();
    }, (err) => {
      console.log(JSON.stringify(err));
      this.utils.showToast('Terjadi kesalahan');
    });
  }
  closePage() {
    this.modalCtrl.dismiss();
  }
}
