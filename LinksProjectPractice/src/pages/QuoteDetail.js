import {
  Link,
  useParams,
  Route,
  useRouteMatch,
} from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import { Fragment, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params.quoteId;
  const {
    sendRequest,
    status,
    error,
    data: responseData,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  console.log(responseData, quoteId);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!responseData.text) {
    return <p>No quote found!</p>;
  }
  const quote = responseData.find((item) => item.quoteId === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.name} />
      <Route path={`/quotes/${params.quoteId}/`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Add a comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
