import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { motion } from "framer-motion";

const LangCard = ({perc, name, ...rest}) => {
    return (
        <motion.div className="box"
            {...rest}
        >
            <CircularProgressBar
                colorCircle="#e6e6e6"
                size="20rem"
                linearGradient={["#AA367C", "#4A2FBD"]}
                cut={30}
                percent={perc}
                speed={70}
                rotation={144}
                round
                fontColor="#000"
                stroke={7}
                fontSize="1.7rem"
                fontWeight={500}
            />
            <h4 className="lang">{name}</h4>
        </motion.div>
    );
};

export default LangCard;
