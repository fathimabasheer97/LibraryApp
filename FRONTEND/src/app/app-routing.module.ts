import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{path : '',component:HomeComponent},
                        {path : 'login',component:LoginComponent},
                        {path:'books',component:BooksComponent},
                        {path:'addbook',canActivate:[AuthGuard],component:AddbookComponent},
                        {path : 'signup',component:SignupComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
