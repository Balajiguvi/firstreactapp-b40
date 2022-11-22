import { Counter } from "./Counter";

// user component 
export function User({ name, pic, about, rating }) {
    // const { name, pic } = props     ---> (obejct desturucturing)
    // let name = props
    return (
        <>
            <img className="user-pic" src={pic} alt={name} />
            <h1><span className="user-name">{name}</span></h1>
            <h4>Language : Tamil</h4>
            <h4>Rating: {rating} </h4>
            {/* Counter componenent ah inga call pannirukom */}
            <Counter />
            <h3>{about}</h3>
        </>
    );
}
