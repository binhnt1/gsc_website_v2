import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../utility.module';
import { BlogDetailComponent } from './blog.detail.component';

@NgModule({    
    declarations: [
        BlogDetailComponent
    ],
    imports: [
        UtilityModule,
        RouterModule.forChild([
            { path: '', component: BlogDetailComponent, pathMatch: 'full' }
        ])
    ],
})
export class BlogDetailModule { }
