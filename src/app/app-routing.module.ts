import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// Layout

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
          { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
          { path: 'blog.html', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
          { path: 'blogdetail', loadChildren: () => import('./modules/blog.detail/blog.detail.module').then(m => m.BlogDetailModule) },
          { path: 'blogdetail.html', loadChildren: () => import('./modules/blog.detail/blog.detail.module').then(m => m.BlogDetailModule) },
          { path: '**', redirectTo: '/main.html' }]
      }
    ], { initialNavigation: 'enabled', onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
