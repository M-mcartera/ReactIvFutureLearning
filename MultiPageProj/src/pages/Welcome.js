import { Route } from "react-router-dom"

const Welcome = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <Route path="/welcome/newUser">
          <p>welcome new user</p>
      </Route>
    </div>
  );
};
export default Welcome;
