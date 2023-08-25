import { CommentProps } from "../utils/props";
import Card from "./Card";

const CommentList = ({ comments }: CommentProps) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Card
          key={index}
          title={comment.name}
          body={comment.body}
          userName={comment.email}
          style="my-1"
        />
      ))}
    </div>
  );
};

export default CommentList;
