import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.page.html',
    styleUrls: ['./pages.page.scss'],
})
export class PagesPage {

    constructor(
        private menuCtrl: MenuController,
        private router: Router
    ) {}

    closeModal() {
        this.menuCtrl.close();
    }

    goRouter(route: string) {
        this.menuCtrl.close();
        this.router.navigate(['/pages', route])
    }
}
