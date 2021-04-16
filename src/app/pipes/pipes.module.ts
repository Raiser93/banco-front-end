import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeAccountTranslatePipe } from './type-account-translate/type-account-translate.pipe';



@NgModule({
    declarations: [
        TypeAccountTranslatePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TypeAccountTranslatePipe
    ]
})
export class PipesModule {}
