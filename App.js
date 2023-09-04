const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello h1 tag"),React.createElement("h2",{},"hello h2 tag")]
)
)


console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
