/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BiLike, BiDislike } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import GoBack from "../../components/GoBack";
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

  return (
    <>
      <GoBack/>
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
            <div style={{display: "flex", gap: "12px"}}>
              <span><BiLike /> {post.reactions.likes}</span>
              <span><BiDislike />{post.reactions.dislikes}</span>
              <span><GrView />{post.views}</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BlogDetails;