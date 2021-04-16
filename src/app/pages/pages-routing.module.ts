import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';
import { HomePage } from './home/home.page';

const routes: Routes = [{
    path: '',
    component: PagesPage,
    children: [
        {
            path: '',
            redirectTo: 'bank-accounts',
            pathMatch: 'full'
        },
        {
            path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
        },
        {
            path: 'bank-accounts',
            loadChildren: () => import('./bank-accounts/bank-accounts.module').then( m => m.BankAccountsPageModule)
        },
        {
            path: 'third-bank-accounts',
            loadChildren: () => import('./third-bank-accounts/third-bank-accounts.module').then( m => m.ThirdBankAccountsPageModule)
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesPageRoutingModule {}
