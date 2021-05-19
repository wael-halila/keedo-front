import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {ClaimComponent} from "./claim/claim.component";

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostComponent },
  {path: 'claim', component: ClaimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
