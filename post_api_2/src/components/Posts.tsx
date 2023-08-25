import Card from "./Card";
import { PostsProps } from "../utils/props";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Posts = ({ posts, users }: PostsProps) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Hero title="Posts" />
      <ul className="list-group list-group-flush d-flex gap-2">
        {Object.keys(posts).map((postId) => {
          const post = posts[Number(postId)];
          return (
            <li className="list-style-none" key={Number(postId)}>
              <Link to={`/posts/${Number(postId)}`} className="txt-deco-none">
                <Card
                  key={Number(postId)}
                  title={post.title}
                  body={post.body}
                  userName={users[post.userId]}
                  style="card-hover"
                ></Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
