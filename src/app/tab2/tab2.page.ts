import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { BookAddPage } from '../book-add/book-add.page';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  books: any = [];

  constructor(
    private bookService: BookService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private utils: UtilsService) { }
  getData() {
    this.bookService.getAllBooks().subscribe((response) => {
      this.books = response;
      console.log(response);
      console.log(this.books);
    });
  }
  ionViewWillEnter() {
    this.getData();
  }

  async goAdd() {
    const modal = await this.modalCtrl.create({
      component: BookAddPage
    });
    modal.onWillDismiss().then(() => {
      this.getData();
    });
    return await modal.present();
  }
  doRefresh(event) {
    this.getData();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  goDetail(book) {
    console.log('id: ' + book.id);
    this.router.navigate(['/book-detail/' + book.id]);
  }
  async delete(book) {
    const alert = await this.alertCtrl.create({
      header: 'Konfirmasi!',
      message: 'Apakah anda yakin akan menghapus buku <strong>' + book.title + '</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (lol) => {
            console.log('cancel' + lol);
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.bookService.deleteBook(book.id).subscribe((response) => {
              console.log(response);
              this.utils.showToast('Berhasil dihapus')
              this.getData();
            });
          }
        }
      ]
    });
    alert.present();
  }
}
