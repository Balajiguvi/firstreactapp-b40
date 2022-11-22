import { useState } from "react";

// hooks 

export function Counter() {
    // using Hooks   ==> write hooks in camelCase and import useState.
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    // conditional styling
    const likeStyles = {
        color: like < 9 ? "deepskyblue" : "green",
        fontSize: "25px",
        borderRadius: "0.5rem",
        padding: "5px",
        margin: "10px"
    };

    const disLikeStyles = {
        color: disLike < 9 ? "deepskyblue" : "red",
        fontSize: "25px",
        borderRadius: "0.5rem",
        padding: "5px",
        margin: "10px"
    };

    return (
        <>
            {/* write onClick in camelCase. */}
            {/* conditional rendering */}
            {like - disLike > 9 ? <h3>Feel good movie. 🤩✨</h3> : null}
            <button type="text" style={likeStyles} onClick={() => setLike(like + 1)}> 👍 {like}</button>
            <button type="text" style={disLikeStyles} onClick={() => setDisLike(like + 1)}> 👎 {disLike}</button>
        </>
    );
}
