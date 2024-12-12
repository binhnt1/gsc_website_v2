import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ArticleDto } from 'src/app/domains/object/article.dto';

@Component({
    selector: 'tw-article-list',
    styleUrls: ['./article.list.component.scss'],
    templateUrl: './article.list.component.html',
})
export class ArticleListComponent implements OnChanges {
    date: Date = new Date();
    primaryItem: ArticleDto;
    @Input() items: ArticleDto[];

    ngOnChanges(): void {
        this.primaryItem = this.items && this.items.length > 0 ? this.items[0] : null;
    }
}
