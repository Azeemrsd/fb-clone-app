import { Component, OnInit } from '@angular/core';
import {Posts} from '../posts.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  
})
export class PostsComponent implements OnInit {
posts:{id:any,content:string,likes:any,commentCount:any,comments:any}[]= [];
  

constructor(private postService :Posts) { }
  // private route:ActivatedRoute
    // private router:Router,
liked(id){
  this.postService.liked(id)
}
  ngOnInit() {
    this.posts = this.postService.posts

  }
  // onCommentClicked(id){
  //   this.router.navigate(['comments'],id)
  // }

}
