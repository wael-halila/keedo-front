import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';
import { ForumComponent } from './components/forum/forum.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    ForumComponent,
    FooterComponent,
    HeaderComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
