import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {
  currentCard: string = '';
  tempCurrentCard: string = 'tempValueForTesting';

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.currentCard = navParams.get('card');
  }

  goBack(): void {
    this.navCtrl.pop();
  }
}
