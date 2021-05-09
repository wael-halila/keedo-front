import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForumComponent} from './components/forum/forum.component';
import {HomeComponent} from './components/home/home.component';
import {TemplateComponent} from './components/template/template.component';

const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: 'template', component: TemplateComponent },
  { path: 'home', component: TemplateComponent },
  { path: 'forum', component: ForumComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
