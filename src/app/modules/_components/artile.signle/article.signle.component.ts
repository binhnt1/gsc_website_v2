import { Component, Input } from '@angular/core';
import { ArticleDto } from 'src/app/domains/object/article.dto';

@Component({
    selector: 'tw-article-signle',
    styleUrls: ['./article.signle.component.scss'],
    templateUrl: './article.signle.component.html',
})
export class ArticleSignleComponent {
    @Input() item: ArticleDto;
}
