import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css',
  '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class CommentsComponent implements OnInit {

  constructor(private postService:Posts, 
     ) { }
  posts:{id:any,content:string,likes:any,commentCount:any,comments:any}[]= [];
  

  ngOnInit() {
    this.posts=this.postService.posts
    // this.comment = {
    //   id:this.route.snapshot.params['id']
    // }
    // console.log(this.comment.id)
  }
addComment(event,id){
  const value = event.target.value;
  const postId= id
  console.log(value)
  console.log(postId)
this.postService.commentAdded(postId,value);
event.target.value=""
}
}
