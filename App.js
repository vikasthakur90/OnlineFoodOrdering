import React from "react";
import ReactDOM from "react-dom/client";

const d = "Vikas Thakur";
const parent = (
    <h1 className="heading">Hello vikas</h1>
);
const Headingcomponent = () =>(
   <h1>hello heading</h1>
    );
//Component Composition
const FooterComponent = ()=> (
    <div>
    {parent}
    {d}
    <Headingcomponent />
    <footer>hey i am footer</footer>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FooterComponent />);
