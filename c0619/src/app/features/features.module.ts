import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorModule } from './administrator/administrator.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdministratorModule,
    UserModule,
    AuthModule,
  ]
})
export class FeaturesModule { }
