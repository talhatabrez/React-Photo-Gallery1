import React from "react";

function Card(props) {
    return (
        <div className = "card">
            <div className="card-img">
                <img className="rounded" src = {props.img} alt = "dummyAlt" />
                <div> <h2>{props.name}</h2> </div>
            </div>
        </div>
    );
}
export default Card;



/*{ <h1>Photo Gallery</h1>

<h3>Picture 1</h3>
<img src = "https://unsplash.com/photos/yC-Yzbqy7PY" alt = "pic 1" />

<h3>Picture 2</h3>
<img src = "https://unsplash.com/photos/LNRyGwIJr5c" alt = "pic 2" />

<h3>Picture 3</h3>
<img src = "https://unsplash.com/photos/N7XodRrbzS0" alt = "pic 3" />

<h3>Picture 4</h3>
<img src = "https://unsplash.com/photos/Dl6jeyfihLk" alt = "pic 4" />

<h3>Picture 5</h3>
<img src = "https://unsplash.com/photos/LF8gK8-HGSg" alt = "pic 5" />

<h3>Picture 6</h3>
<img src = "https://unsplash.com/photos/tAKXap853rY" alt = "pic 6" /> }*/