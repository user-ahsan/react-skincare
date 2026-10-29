import React from "react";
import { store } from "../productsStore/Store";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const YouMayAlsoLike = () => {
    return (
        <div className="youMay">
            <Marquee pauseOnHover={true} speed={100}>
                {store
                    .filter((item) => item.type === "ourBestSellers")
                    .map((item) => (
                        <div key={item.id}>
                            <Link to={`/${item.id}`}>
                                <img
                                    src={item.primaryImage}
                                    alt={item.name}
                                    className="w-48 spCaroImg brForMobile rounded-xl pl-4 pr-4 mb-8"
                                />
                            </Link>
                        </div>
                    ))}
            </Marquee>
        </div>
    );
};

export default YouMayAlsoLike;
