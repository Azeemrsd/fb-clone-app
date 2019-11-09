export class Posts{
     posts = []
        
          addPost(post){
          const newPost = {
               id:Math.random(),
               content:post,
               likes:0,
               commentCount:0,
               comments:[]
          }
          this.posts.unshift(newPost)
          }
          liked(id){
  
               let temp = this.posts.find(post=>(post.id===id))
              
              temp.likes+=1;
              }
              commentAdded(id,value){
              const post = this.posts.find(post=>post.id===id)
               //selecting the post with an id 
               post.comments.unshift(value)
               post.commentCount+=1;
              }
}