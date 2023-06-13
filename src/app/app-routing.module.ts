import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:'',component:FirstcomponentComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component: HomepageComponent},
  {path:'transaction',component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
