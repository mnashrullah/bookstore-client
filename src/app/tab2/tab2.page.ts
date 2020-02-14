import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookAddPage } from '../book-add/book-add.page';

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
    private modalCtrl: ModalController) { }
  getData() {
    this.bookService.getAllBooks().subscribe((response) => {
      this.books = response;
      console.log(response);
      console.log(this.books);
    });
  }
  ngOnInit() { console.log('page 1 ngOnInit') }
  ngOnDestroy() { console.log('page 1 ngOnDestroy') }
  ionViewWillEnter() { console.log('page 1 ionViewWillEnter'); this.getData(); }
  ionViewDidEnter() { console.log('page 1 ionViewDidEnter') }
  ionViewWillLeave() { console.log('page 1 ionViewWillLeave') }
  ionViewDidLeave() { console.log('page 1 ionViewDidLeave') }

  // ngOnInit() { console.log('tab2 init') }
  // ionView() { console.log('tab2 init') }
  // ionViewWillEnter() { console.log('will'); this.getAll(); }
  // ionViewWillLeave() { console.log('will'); this.getAll(); }
  // ionViewDidLeave() { console.log('will'); this.getAll(); }
  // ionViewDidEnter() { console.log('did'); this.getAll(); }
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
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  goDetail(book) {
    console.log('id: ' + book.id);
    this.router.navigate(['/book-detail/' + book.id]);
  }
  delete(book) {
    this.bookService.deleteBook(book.id).subscribe((response) => {
      console.log(response);
      this.getData();
    });
  }

}
