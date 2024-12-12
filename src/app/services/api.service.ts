import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ResultApi } from "../domains/datas/result.api";
import { ApiUrl } from "../helpers/api.url.helper";

@Injectable()
export class ApiService {

    constructor(protected http: HttpClient) {
    }

    async getCategories() {
        let api = ApiUrl.ToUrl('/category/items?top=1');
        return await this.callApi(api);
    }
    async getArticle(id: string) {
        let api = ApiUrl.ToUrl('/article/item/' + id);
        return await this.callApi(api);
    }
    async getRandomArticles(top: number = 10) {
        let api = ApiUrl.ToUrl('/article/items?random=true&size=' + top);
        return await this.callApi(api);
    }

    protected async callApi(api: string, params?: any, method: string = 'GET') {
        if (!params) params = {};
        switch (method) {
            case 'POST': {
                return await this.http
                    .post(api, params)
                    .toPromise()
                    .then((c: any) => {
                        return ResultApi.ToObject(c);
                    })
                    .catch(async e => {
                        return ResultApi.ToException(e);
                    });
            }
            default: {
                return await this.http
                    .get(api)
                    .toPromise()
                    .then((c: any) => {
                        return ResultApi.ToObject(c);
                    })
                    .catch(async e => {
                        return ResultApi.ToException(e);
                    });
            }
        }
    }
}