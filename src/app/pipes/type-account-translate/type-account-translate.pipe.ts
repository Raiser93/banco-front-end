import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeAccountTranslate'
})
export class TypeAccountTranslatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
