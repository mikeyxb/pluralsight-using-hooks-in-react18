import React, { useEffect } from "react";


const Demo = ({useSate}) => {

    const [text1, setText1] = useState("first");
    const [text2, setText2] = useState("last");


    // here we are using useEffect to update the title of the page every time the text1 changes
    // we are leaving the dependency array empty so that it runs on every render
    useEffect(() => {
        document.title = `${text1.length}`;
    });

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

export default Demo;
