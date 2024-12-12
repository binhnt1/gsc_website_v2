import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ArticleDto } from 'src/app/domains/object/article.dto';
import { CategoryDto } from 'src/app/domains/object/category.dto';

@Component({
    selector: 'tw-article-highlight',
    styleUrls: ['./article.highlight.component.scss'],
    templateUrl: './article.highlight.component.html',
})
export class ArticleHighlightComponent implements OnChanges {
    date: Date = new Date();
    @Input() item: CategoryDto;
    article: ArticleDto = null;

    ngOnChanges(): void {
        this.article = this.item?.articles && this.item?.articles.length > 0
            ? this.item?.articles[0]
            : null;
        console.log(this.item, this.article);
    }
}
