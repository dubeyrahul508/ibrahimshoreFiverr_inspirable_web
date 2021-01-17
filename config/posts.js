export async function getPostData(id){
  const res = await fetch(`https://production.inspirable.io/api/blog/${id}`);
  const post = await res.json();  
  /*if(post.data.comments_count>0){
    post.data.comment.map((comment)=>{
       const 
    })
  }*/
      return {
          post:post.data
                  
      }

}

export async function putPostData(id){
  const res = await fetch(`https://production.inspirable.io/api/blog/${id}`,{ method: 'PUT'});
  const post = await res.json();  

      return {
          post:post.data
                  
      }

}



export async function getAllPostIds(){
  
  
    // Get the paths we want to pre-render based on posts
    
    
    const res = await fetch("https://production.inspirable.io/api/blog");
    const posts = await res.json();  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return posts.data.map(post => {
      return {
        params: {
          id: post.id.toString()
        }
      }
    })
}


