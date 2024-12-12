import { Pipe, PipeTransform } from '@angular/core';
import { UtilityExHelper } from '../helpers/utility.helper';

@Pipe({
    name: 'numberx',
})
export class NumberPipe implements PipeTransform {
    transform(
        value: any,
        digitsInfo: string = '1.0-2',
        locale: string = 'en',
    ): string | null {
        if (!value) value = 0;

        if (typeof value == 'string') {
            let number = UtilityExHelper.convertToNumber(value);
            if (!number) return '0';

            if (number > 1000) return (number / 1000).toString() + 'K';
            return number.toString();
        } else {
            try {
                let number = typeof value === 'number'
                    ? value
                    : parseFloat(value);
                return number.toLocaleString("en-US", { minimumFractionDigits: 2 });
            } catch {
                return value;
            }
        }
    }
}

@Pipe({
    name: 'numberEmpty',
})
export class NumberEmptyPipe implements PipeTransform {
    transform(value: any): string | null {
        if (!value) return '';
        return value;
    }
}