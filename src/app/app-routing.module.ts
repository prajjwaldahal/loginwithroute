import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewpageComponent } from './newpage/newpage.component';
const routes: Routes = [
  {
    path: '',
 component: LoginComponent,
    
    
  },
  {
    path: 'prj',
 component: NewpageComponent,
    
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

