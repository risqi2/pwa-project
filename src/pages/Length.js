import React from "react";
import { create, all } from "mathjs";
const config = {};
const math = create(all, config);


export default function Length(){
    return(
        <React.Fragment>
            {
                console.log(math.evaluate("12c to k").toString())
            }
            length
        </React.Fragment>
    )
}