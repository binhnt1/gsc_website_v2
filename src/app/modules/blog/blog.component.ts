import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ResultApi } from 'src/app/domains/datas/result.api';
import { ArticleDto } from 'src/app/domains/object/article.dto';
import { CategoryDto } from 'src/app/domains/object/category.dto';

@Component({
    styleUrls: ['./blog.component.scss'],
    templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
    loading: boolean = true;
    articles: ArticleDto[] = [];
    categories: CategoryDto[] = [];
    selectedCategory?: CategoryDto;

    constructor(public service: ApiService) {

    }

    async ngOnInit(): Promise<void> {
        await this.loadArticles();
        await this.loadCategories();
        this.loading = false;
    }

    choiceCategory(item: CategoryDto) {
        this.selectedCategory = item;
    }

    private async loadArticles() {
        await this.service.getRandomArticles(13).then((result: ResultApi) => {
            if (ResultApi.IsSuccess(result)) {
                this.articles = result.Object;
            }
        })
    }

    private async loadCategories() {
        await this.service.getCategories().then((result: ResultApi) => {
            if (ResultApi.IsSuccess(result)) {
                this.categories = result.Object;
                if (this.categories && this.categories.length > 0)
                    this.selectedCategory = this.categories[0];
            }
        })
    }
}
