import Link from "next/link";

import buildClient from "../api/build-client";

const Index = ({ currentUser }) => {
  // console.log("I am in the component!", currentUser);

  return currentUser ? (
    <div>You are signed in</div>
  ) : (
    <div>You are NOT signed in</div>
  );
};

Index.getInitialProps = async (context) => {
  console.log("landing page");
  const { data } = await buildClient(context).get("/api/users/currentuser");

  return data;
};

export default Index;
