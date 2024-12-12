export class ArticleDto {
    id?: number;
    title?: string;
    image?: string;
    author?: string;
    content?: string;
    publishDate?: Date;
    categoryId?: number;
    others: ArticleDto[];
    categoryName?: string;
}