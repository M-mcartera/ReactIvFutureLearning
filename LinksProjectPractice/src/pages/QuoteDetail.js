import { Link, useParams, Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import { Fragment } from "react";

const DUMMY_QUOTES = [
  { id: "q1", name: "A", text: "aaaaa" },
  { id: "q2", name: "B", text: "bbbbb" },
];

const QuoteDetail = () => {
  const params = useParams()
  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

  if(!quote){
    return <p>No quote found</p>
  }


  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.name}/> 
      <Link className="btn" to={`/quotes/${params.quoteId}/comments`}>
        Add a comment
      </Link>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
