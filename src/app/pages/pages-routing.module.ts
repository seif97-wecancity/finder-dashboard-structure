import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: "/",
  //   component: Home1Component
  // },
 
  // {
  //   path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  // },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
