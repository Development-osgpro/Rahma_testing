import React, { memo } from "react";

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";

import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const countries = ["United States of America", "Turkey", "Syria", "Yemen", "Kenya", "Jordan", "Palestine", "Sierra Leone", "Lebanon", "Sudan", "Chad", "Cameroon", "Ghana", "Mali"]

const MapChart = ({ setTooltipContent }) => {

    const mapAnimation = {
        hidden: { opacity: 0},
        visible: {
            opacity: 1,
            transition: { duration : 1.5},
        }
    }


    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <>
                                    {/* geo.properties.NAME !== "United States of America" */}
                                    {!countries.includes(geo.properties.NAME) ? (
                                        <>
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                // onMouseEnter={() => {
                                                //     const { NAME, POP_EST } = geo.properties;
                                                //     setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                                // }}
                                                // onMouseLeave={() => {
                                                //     setTooltipContent("");
                                                // }}
                                                style={{
                                                    default: {
                                                        fill: "white",
                                                        stroke: "#e3e3e3",
                                                        outline: 'none'
                                                    },
                                                    hover: {
                                                        fill: "none",
                                                        outline: "none"
                                                    },
                                                    pressed: {
                                                        fill: "none",
                                                        outline: "none",
                                                        stroke: 'none'
                                                    }
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <>
                                        {console.log(geo)}
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => {
                                                    const { NAME, POP_EST } = geo.properties;
                                                    console.log(NAME)
                                                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                                    // <Testcomp />
                                                }}
                                                onMouseLeave={() => {
                                                    setTooltipContent("");
                                                    <></>
                                                }}
                                                className="country"
                                                style={{
                                                    default: {
                                                        fill: "#29842a",
                                                        outline: "none"
                                                    },
                                                    hover: {
                                                        fill: "#2b3990",
                                                        outline: "none",
                                                    },
                                                    pressed: {
                                                        fill: "#2b3990",
                                                        outline: "none"
                                                    }
                                                }}
                                            >
                                            </Geography>
                                        </>
                                    )}
                                </>
                            ))
                        }
                    </Geographies>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
