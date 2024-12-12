import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { UtilityModule } from '../utility.module';

@NgModule({    
    declarations: [
        BlogComponent
    ],
    imports: [
        UtilityModule,
        RouterModule.forChild([
            { path: '', component: BlogComponent, pathMatch: 'full' }
        ])
    ],
})
export class BlogModule { }
