import React from 'react';
import App from './components/App';
import {createRoot} from "react-dom/client";

const myElement = <App />;
const root = createRoot(document.getElementById("root"));
root.render(myElement);

/*{ <h3>Picture 1</h3>
// const myElement = (
//     <div>
//         <h1>Photo Gallery</h1>
//         <Card 
//             name = "Photo Shot 1"
//             img = "https://unsplash.com/photos/yC-Yzbqy7PY"/>
//         <Card 
//             name = "Photo Shot 2"
//             img = "https://unsplash.com/photos/tAKXap853rY"/>
//         <Card 
//             name = "Photo Shot 3"
//             img = "https://unsplash.com/photos/LF8gK8-HGSg"/>
//         <Card 
//             name = "Photo Shot 4"
//             img = "https://unsplash.com/photos/Dl6jeyfihLk"/>
//         <Card 
//             name = "Photo Shot 5"
//             img = "https://unsplash.com/photos/N7XodRrbzS0"/>
//         <Card 
//             name = "Photo Shot 6"
//             img = "https://unsplash.com/photos/LNRyGwIJr5c"/>    
//     </div>
// );


<img src = "https://unsplash.com/photos/yC-Yzbqy7PY" alt = "picture 1" />

<h3>Picture 2</h3>
<img src = "https://unsplash.com/photos/LNRyGwIJr5c" alt = "picture 2" />

<h3>Picture 3</h3>
<img src = "https://unsplash.com/photos/N7XodRrbzS0" alt = "picture 3" />

<h3>Picture 4</h3>
<img src = "https://unsplash.com/photos/Dl6jeyfihLk" alt = "picture 4" />

<h3>Picture 5</h3>
<img src = "https://unsplash.com/photos/LF8gK8-HGSg" alt = "picture 5" />

<h3>Picture 6</h3>
<img src = "https://unsplash.com/photos/tAKXap853rY" alt = "picture 6" /> }*/