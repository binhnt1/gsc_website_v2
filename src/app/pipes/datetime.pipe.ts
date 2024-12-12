import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datex'
})
export class DatePipe implements PipeTransform {
    transform(value: Date): string {
        return this.dateTimeString(value);
    }

    private dateTimeString(date: Date): string {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);
        if (date.getFullYear() == 0) return '';
        if (date.getFullYear() == 1) return '';
        let message = '';
        let month = date.getMonth() + 1;
        message += (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        message += '/' + (month < 10 ? '0' + month : month);
        message += '/' + date.getFullYear();
        return message;
    }
}

@Pipe({
    name: 'datetimex'
})
export class DateTimePipe implements PipeTransform {
    transform(value: Date): string {
        return this.dateTimeString(value);
    }

    private dateTimeString(date: Date): string {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);
        if (date.getFullYear() == 0) return '';
        if (date.getFullYear() == 1) return '';
        let message = '';
        let month = date.getMonth() + 1;
        message += (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        message += '/' + (month < 10 ? '0' + month : month);
        message += '/' + date.getFullYear();
        message += ' ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        message += ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        message += ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return message;
    }
}

@Pipe({
    name: 'datetimeutc'
})
export class DateTimeUtcPipe implements PipeTransform {
    transform(value: Date): string {
        return this.dateTimeString(value);
    }

    private offset() {
        let timeOffset = new Date().getTimezoneOffset();
        let timeOffsetString = ((timeOffset < 0 ? '+' : '-') + // Note the reversed sign!
            this.pad(Math.round(Math.abs(timeOffset / 60)), 2) +
            this.pad(Math.abs(timeOffset % 60), 2));
        return timeOffsetString;
    }
    private dateTimeString(date: Date): string {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);
        if (date.getFullYear() == 0) return '';
        if (date.getFullYear() == 1) return '';

        let shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
        let month = shortMonthName(date);

        let message = '';
        message += (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        message += ' ' + month;
        message += ' ' + date.getFullYear();
        message += ' - ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        message += ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        message += ' (UTC ' + this.offset() + ')';
        return message;
    }
    private pad(number: number, length: number) {
        let str = "" + number
        while (str.length < length) {
            str = '0' + str
        }
        return str
    }
}