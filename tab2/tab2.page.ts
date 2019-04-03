import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';
// import { Platform, ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
              public navCtrl: NavController,
              // public platform: Platform,
              // public actionsheetCtrl: ActionSheetController
    ){
    
  }

  btnClicked(){
    console.log("btn clicked")
    this.router.navigateByUrl('')
  }

  openMenu() {
  this.router.navigateByUrl('/photo')
  }
}
