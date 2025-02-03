import { Helmet, HelmetProvider } from "react-helmet-async";

const DocumentTitle = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
    // <HelmetProvider>

    // </HelmetProvider>
  );
};

export default DocumentTitle;
