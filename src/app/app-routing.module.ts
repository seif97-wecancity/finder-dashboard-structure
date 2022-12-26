import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { IsLoginGuard } from "./shared/guard/is-login.guard";
import { IsNotLoginGuard } from "./shared/guard/is-not-login.guard";

const routes: Routes = [
  { path: '', canActivate: [IsNotLoginGuard], component: SigninComponent },
  { path: '', canActivate: [IsLoginGuard], loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'auth',    canActivate: [IsLoginGuard], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  },
  // { path: '**', pathMatch: 'full',  component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
