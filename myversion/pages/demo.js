import React, { useState } from "react";

const demo = () => {

    const [text1, setText1] = useState("first");
    const [text2, setText2] = useState("last");

	return (
		<div className="conatainer">
			<h3>Simple state and lifecycle management</h3>

            <input onChange={(e) => setText1(e.target.value)} value={text1} />
            <hr />
            <input onChange={(e) => setText2(e.target.value)} value={text2} />
            <hr />

            <h2>
                <i>{text1} {text2}</i>
            </h2>
		</div>
	);
};

export default demo;
