import { ArticleDto } from "./article.dto";

export class CategoryDto {
    id?: number;
    name?: string;
    articles?: ArticleDto[];
}