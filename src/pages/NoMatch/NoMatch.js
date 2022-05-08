import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <section className="container">
      <p>There's nothing here: 404!</p>
      <Link to={`/`}>Go back to the homepage</Link>
    </section>
  );
};

export default NoMatch;
