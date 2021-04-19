import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';

@Component({
    selector: 'app-qr-action',
    templateUrl: './qr-action.page.html',
    styleUrls: ['./qr-action.page.scss'],
})
export class QrActionPage implements ViewDidEnter {

    constructor(
    ) {}

    ionViewDidEnter() {
        // this.qrScanner.prepare().then((Status: QRScannerStatus ) => {
        //     console.log(status);
        // }).catch(e => console.log('Error is', e))
    }

}
