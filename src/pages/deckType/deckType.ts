import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CardPage} from "../card/card";

@Component({
  selector: 'page-list',
  templateUrl: 'deckType.html'
})
export class DeckTypePage {
  selectedType: any = 'Standard';
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  cardList: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedType = navParams.get('title');
    if(this.selectedType === 'Standard') {
      this.cardList = ['0', '1/2','1','2','3','5','8','13','20','40','100','∞','?'];
    } else if(this.selectedType ==='Fibonacci') {
      this.cardList = ['0','1','2','3','5','8','13','21','34','55','89','144','∞','?'];
    } else if(this.selectedType === 'T-Shirt') {
      this.cardList = ['XS','S','M','L','XL','XXL','∞','?'];
    }
  }

  itemTapped(event, card) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CardPage, {
      card: card
    });
  }
}
