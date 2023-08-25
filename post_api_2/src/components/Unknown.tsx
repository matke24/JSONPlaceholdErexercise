import { Link } from "react-router-dom";

const Unknown = () => {
  return (
    <div className="card mt-5 w-75 mx-auto">
      <h5 className="card-header display-2">404 Page Not Found</h5>
      <div className="card-body">
        <h5 className="card-title">An Error Occurred...</h5>
        <p className="card-text">Pleas go back to the home page.</p>
        <Link to={"/posts"} className="btn btn-primary">
          Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default Unknown;
