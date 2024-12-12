import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../../pipes/pipe.module';
import { ArticleListComponent } from './artile.list/article.list.component';
import { KnowledgeHubComponent } from './knowledge.hub/knowledge.hub.component';
import { ArticleSignleComponent } from './artile.signle/article.signle.component';
import { ArticleHighlightComponent } from './artile.highlight/article.highlight.component';

// components

@NgModule({
    imports: [
        PipeModule,
        RouterModule,
        CommonModule,
    ],
    declarations: [
        ArticleListComponent,
        KnowledgeHubComponent,
        ArticleSignleComponent,
        ArticleHighlightComponent,
    ],
    exports: [
        ArticleListComponent,
        KnowledgeHubComponent,
        ArticleSignleComponent,
        ArticleHighlightComponent,
    ]
})
export class ComponentModule { }
