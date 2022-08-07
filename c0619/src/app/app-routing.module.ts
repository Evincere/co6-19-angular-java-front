import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "usuario",
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path: "administrador",
    loadChildren: () => import('./features/administrator/administrator.module').then(m => m.AdministratorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
