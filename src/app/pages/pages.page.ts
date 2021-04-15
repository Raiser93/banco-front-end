import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.page.html',
    styleUrls: ['./pages.page.scss'],
})
export class PagesPage {

    constructor(
        private menuCtrl: MenuController
    ) {}

    closeModal() {
        this.menuCtrl.close();
    }
}
