const Nav = () => {
  return (
    <div className="mt-3">
      <form className="input-group">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="search by author"
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </form>
    </div>
  );
};

export default Nav;
