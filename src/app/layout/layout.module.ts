import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { PipeModule } from '../pipes/pipe.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        PipeModule,
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent,
    ],
    exports: [
        LayoutComponent,
    ]
})
export class LayoutModule { }
