import { useParams, Route } from "react-router-dom";
const QuoteDetail = () => {
  const params = useParams();

  return (
    <section>
      New QuoteDetail {params.quoteId}
      
      <Route path={`/quotes/${params.quoteId}/comments`}></Route>;
    </section>
  );
};

export default QuoteDetail;
