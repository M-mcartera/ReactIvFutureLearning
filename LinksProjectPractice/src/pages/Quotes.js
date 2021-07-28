import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", name: "A", text: "aaaaa" },
  { id: "q2", name: "B", text: "bbbbb" },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default Quotes;
