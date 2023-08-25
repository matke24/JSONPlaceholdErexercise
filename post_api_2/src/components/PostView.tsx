import Unknown from "./Unknown";
import { PostsProps } from "../utils/props";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import { fetchComments } from "../utils/api";

const PostView = ({ posts, users }: PostsProps) => {
  const postId = useParams();
  const post = posts[Number(postId.id)];

  const [commentMap, setCommentMap] = useState([]);

  useEffect(() => {
    async function getComments() {
      const commentList = await fetchComments(Number(postId.id) + 1);
      setCommentMap(commentList);
    }
    getComments();
  }, []);

  if (!post) {
    return <Unknown />;
  } else {
    return (
      <div>
        <div className="card mt-5 mx-auto">
          <h5 className="card-header text-uppercase">{post.title}</h5>
          <div className="card-body">
            <blockquote className="blockquote">
              <p className="mb-0">{post.body}</p>
              <footer className="blockquote-footer mt-1 d-flex justify-content-end">
                <cite title={users[post.userId]}>{users[post.userId]}</cite>
              </footer>
            </blockquote>
            <Link to={"/posts"} className="btn btn-primary">
              Back to Posts
            </Link>
          </div>
        </div>

        <div className="mt-2">
          <Comments comments={commentMap} />
        </div>
      </div>
    );
  }
};

export default PostView;
