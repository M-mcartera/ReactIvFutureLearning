import { Link, useParams, Route , useRouteMatch} from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import { Fragment } from "react";

const DUMMY_QUOTES = [
  { id: "q1", name: "A", text: "aaaaa" },
  { id: "q2", name: "B", text: "bbbbb" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

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
