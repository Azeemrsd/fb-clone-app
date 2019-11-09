import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Posts } from './posts.service';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostsComponent } from './posts/posts.component';
import { NewpostComponent } from './posts/newpost/newpost.component';
import { Posts } from './posts.service';
import { CommentsComponent } from './posts/comments/comments.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:AuthComponent},
  {path:'posts',component:NewpostComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsComponent,
    NewpostComponent,
    CommentsComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Posts],
  bootstrap: [AppComponent],
})
export class AppModule { }
