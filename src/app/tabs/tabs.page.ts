import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() { }
  ngOnInit() { console.log('page 1 ngOnInit') }
  ngOnDestroy() { console.log('page 1 ngOnDestroy') }
  ionViewWillEnter() { console.log('page 1 ionViewWillEnter'); }
  ionViewDidEnter() { console.log('page 1 ionViewDidEnter') }
  ionViewWillLeave() { console.log('page 1 ionViewWillLeave') }
  ionViewDidLeave() { console.log('page 1 ionViewDidLeave') }

}
