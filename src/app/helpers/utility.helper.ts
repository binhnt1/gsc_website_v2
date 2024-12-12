export class UtilityExHelper {
    public static dateString(date: Date) {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);

        let message = '';
        let month = date.getMonth() + 1;
        message += (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        message += '/' + (month < 10 ? '0' + month : month);
        message += '/' + date.getFullYear();
        return message;
    }

    public static randomText(length: number) {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    public static randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public static dateTimeString(date: Date) {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);

        let message = '';
        let month = date.getMonth() + 1;
        message += (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        message += '/' + (month < 10 ? '0' + month : month);
        message += '/' + date.getFullYear();
        message += ' ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        message += ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        return message;
    }

    public static convertToNumber(val: any): any {
        if (!val) return 0;
        let balance: string = val.toString();
        return Number(balance.replace(/,/g, ''));
    }

    public static convertToRateNumber(val: any): any {
        let valueNumber = this.convertToNumber(val);
        return '1:' + valueNumber;
    }

    public static convertToCardName(val: string): any {
        return (val[0] + val.slice(2)).toLowerCase();
    }

    public static trimChar(text: string, charToRemove: string) {
        if (text && charToRemove) {
            while (text.charAt(0) == charToRemove) {
                text = text.substring(1);
            }
            while (text.charAt(text.length - 1) == charToRemove) {
                text = text.substring(0, text.length - 1);
            }
        }
        return text;
    }

    public static trimChars(text: string, charToRemoves: string[]) {
        if (text && charToRemoves) {
            charToRemoves.forEach((charToRemove: string) => {
                text = this.trimChar(text, charToRemove);
            });
            charToRemoves.forEach((charToRemove: string) => {
                text = this.trimChar(text, charToRemove);
            });
        }
        return text;
    }

    public static join(texts: string[], separator: string = ', ') {
        if (separator && texts && texts.length > 0) {
            let result: string = '';
            texts.forEach((text: string) => {
                if (text) result += text + separator;
            });
            return this.trimChars(result, [' ', separator.trim()]);
        }
        return null;
    }

    public static formatTime(date: Date) {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);

        let message = '';
        message += ' ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        message += ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        return message;
    }
    public static formatToDate(date: Date) {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);

        date.setDate(date.getDate() + 1);
        let message = '';
        let month = date.getMonth() + 1;
        message += date.getFullYear();
        message += '-' + (month < 10 ? '0' + month : month);
        message += '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        message += ' 00:00:00';
        return message;
    }
    public static formatFromDate(date: Date) {
        if (!date) return '';
        if (date == null) return '';
        if (typeof date == 'string')
            date = new Date(date);

        let message = '';
        let month = date.getMonth() + 1;
        message += date.getFullYear();
        message += '-' + (month < 10 ? '0' + month : month);
        message += '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        message += ' 00:00:00';
        return message;
    }
    public static convertDate(dateString: string) {
        let date = dateString.split(' ')[0],
            time = dateString.split(' ')[1],
            partDates = date.split('-').map(c => parseInt(c)),
            partTimes = time.split(':').map(c => parseInt(c));
        return new Date(partDates[0], partDates[1] - 1, partDates[2], partTimes[0], partTimes[1], partTimes[2]);
    }

    public static paging(array: any, index: number, size: number) {
        return array.slice((index - 1) * size, index * size);
    }
}
