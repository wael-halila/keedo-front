import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {ChatComponent} from "./chat/chat.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {SelectComponent} from "./select/select.component";
import {CommentsComponent} from "./comments/comments.component";

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostComponent },
  {path: 'chat', component: ChatComponent },
  {path: 'add', component: PostDetailsComponent },
  {path: 'comment', component: CommentsComponent },
  {path: 'ad', component: SelectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
