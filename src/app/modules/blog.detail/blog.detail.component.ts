import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResultApi } from 'src/app/domains/datas/result.api';
import { ArticleDto } from 'src/app/domains/object/article.dto';
import { ApiService } from 'src/app/services/api.service';

@Component({
    styleUrls: ['./blog.detail.component.scss'],
    templateUrl: './blog.detail.component.html',
})
export class BlogDetailComponent implements OnInit, OnDestroy {
    id: string;
    loading: boolean;
    item: ArticleDto;
    subscribeQueryParams: Subscription;

    constructor(
        public service: ApiService,
        private activatedRoute: ActivatedRoute) {

    }

    async ngOnInit(): Promise<void> {
        if (!this.subscribeQueryParams) {
            this.subscribeQueryParams = this.activatedRoute.queryParams.subscribe(async (params: any) => {
                this.id = params['id'];
                await this.loadData(this.id);
            });
        }
    }

    ngOnDestroy(): void {
        if (this.subscribeQueryParams != null) {
            this.subscribeQueryParams.unsubscribe();
            this.subscribeQueryParams = null;
        }
    }

    private async loadData(id: string) {
        this.loading = true;
        await this.service.getArticle(id.toString()).then((result: ResultApi) => {
            if (ResultApi.IsSuccess(result)) {
                this.loading = false;
                this.item = result.Object;
            }
        });
    }
}
