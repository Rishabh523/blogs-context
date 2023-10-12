import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pageination from "../components/Pageination";

const Home = () => {
    return(
        <div>
            <Header />
            <div>
                <Blogs />
                <Pageination />
            </div>
        </div>
    )
}

export default Home
