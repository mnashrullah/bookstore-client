import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  dataList: any;
  // books: any;

  // constructor(private bookService: BookService) {
  //   // this.getAll();
  // }
  constructor() {
    this.dataList = [];

    for (let i = 0; i < 25; i++) {
      this.dataList.push("Item number " + this.dataList.length);
    }
  }



  loadData(event) {

    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 25; i++) {
        this.dataList.push("Item number " + this.dataList.length);
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  // loadData(event) {
  //   setTimeout(() => {
  //     console.log('Done');
  //     event.target.complete();
  //     if (this.books.length == 10) {
  //       event.target.disabled = true;
  //       console.log('event target disabled');
  //     }
  //   }, 500);
  // }

  // getAll() {
  //   this.bookService.getAllBooks().subscribe((response) => {
  //     this.books = response;
  //     console.log(response);
  //     console.log(this.books);
  //   });
  // }

}
