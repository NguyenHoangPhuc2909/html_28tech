/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BiLike, BiDislike } from "react-icons/bi";
import { GrView } from "react-icons/gr";
function BlogDetails() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
      });
  }, []);
  console.log(post);
  return (
    <>
      {post && (
        <>
          <h1>{post.title}</h1>

          <div>
            {post.tags.map(tag => (
              <span key={tag}>#{tag} </span>
            ))}
          </div>

          <div>
            {post.body}
            <div>
              <span><BiLike /></span>
              <span>{post.reactions.likes}</span>
              <span><BiDislike /></span>
              <span>{post.reactions.dislikes}</span>
              <span><GrView /></span>
              <span>{post.views}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BlogDetails;