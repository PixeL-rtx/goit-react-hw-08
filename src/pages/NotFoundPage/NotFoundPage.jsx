import { Link } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";

export const NotFoundPage = () => {
  return (
    <div>
      <DocumentTitle>Page not found</DocumentTitle>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <button>
        <Link to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};
