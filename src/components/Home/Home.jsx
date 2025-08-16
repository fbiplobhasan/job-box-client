import React from "react";
import Banner from "./Banner";
import HotJobs from "../HotJob/HotJobs";
import Header from "../shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <Header
          title="Welcome to Job Portal"
          subTitle="Find your dream job with us"
        ></Header>
      </div>
      <div>
        <HotJobs></HotJobs>
      </div>
    </div>
  );
};

export default Home;
