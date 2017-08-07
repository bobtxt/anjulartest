import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'signin', component: SigninComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
