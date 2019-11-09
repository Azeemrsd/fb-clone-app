import { Component,  } from '@angular/core';
import { Posts } from 'src/app/posts.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class NewpostComponent  {

  constructor(private postService:Posts) { }
addPost(event){
  const content = event.target.value;
  console.log(content)
  this.postService.addPost(content)
  event.target.value=""
  
}

}
