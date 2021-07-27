import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>New QuoteDetail {params.quoteId}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
