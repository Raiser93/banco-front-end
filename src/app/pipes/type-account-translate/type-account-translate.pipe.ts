import { Pipe, PipeTransform } from '@angular/core';

enum TypeAccountEnum {
    SAVINGS_ACCOUNT = 'Ahorros',
    CURRENT_ACCOUNT = 'Corriente'
}

@Pipe({
    name: 'typeAccountTranslate'
})
export class TypeAccountTranslatePipe implements PipeTransform {

    transform(value: string): unknown {
        return TypeAccountEnum[value];
    }

}
