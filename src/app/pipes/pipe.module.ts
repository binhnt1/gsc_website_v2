import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { NumberEmptyPipe, NumberPipe } from './number.pipe';
import { SanitizeHtmlPipe } from '../pipes/sanitizehtml.pipe';
import { DatePipe, DateTimePipe, DateTimeUtcPipe } from './datetime.pipe';


@NgModule({
    declarations: [
        DatePipe,
        NumberPipe,
        FilterPipe,
        DateTimePipe,
        DateTimeUtcPipe,
        NumberEmptyPipe,
        SanitizeHtmlPipe,
    ],
    exports: [
        DatePipe,
        NumberPipe,
        FilterPipe,
        DateTimePipe,
        NumberEmptyPipe,
        DateTimeUtcPipe,
        SanitizeHtmlPipe
    ]
})
export class PipeModule { }
