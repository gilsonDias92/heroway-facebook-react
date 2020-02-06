import React from "react";
import Feed from "./Feed";
import ProfileSidebar from "./Profile";

function Main() {
  return (
    <section className="main">
      <Feed />
      <ProfileSidebar />
    </section>
  );
}

export default Main;
