import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'book-detail', loadChildren: () => import('./book-detail/book-detail.module').then(m => m.BookDetailPageModule) },
  { path: 'book-detail/', loadChildren: () => import('./book-detail/book-detail.module').then(m => m.BookDetailPageModule) },
  { path: 'book-detail/:id', loadChildren: () => import('./book-detail/book-detail.module').then(m => m.BookDetailPageModule) },
  {
    path: 'book-add',
    loadChildren: () => import('./book-add/book-add.module').then( m => m.BookAddPageModule)
  },
  {
    path: 'book-edit',
    loadChildren: () => import('./book-edit/book-edit.module').then( m => m.BookEditPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
