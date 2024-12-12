import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipes/pipe.module';
import { ComponentModule } from './_components/component.module';

// modules

@NgModule({
    imports: [
        PipeModule,
        FormsModule,
        CommonModule,
        RouterModule,
        ComponentModule,
    ],
    exports: [
        PipeModule,
        FormsModule,
        CommonModule,
        RouterModule,
        ComponentModule,
    ]
})
export class UtilityModule { }
