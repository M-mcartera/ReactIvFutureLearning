import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: responseData,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (!responseData || responseData.length === 0)) {
    return <NoQuotesFound />;
  }
  console.log(responseData);
  return <QuoteList quotes={responseData} />;
};

export default Quotes;
