import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-standard',
  templateUrl: 'standard.html'
})
export class StandardPage {
  private currentCard: string = '';

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.currentCard = navParams.get('item');
  }

  goBack(): void {
    this.navCtrl.pop();
  }
}
