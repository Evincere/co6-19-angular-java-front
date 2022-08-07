import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorModule } from './administrator/administrator.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdministratorModule,
    UserModule
  ]
})
export class FeaturesModule { }
