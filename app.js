
const parent = React.createElement("div",{ id: "parent" },[
    React.createElement("div", { id: "child" }, [ 
            React.createElement("h1", {}, "I Am an H1 Tag"), 
            React.createElement("h2", {}, "I Am an sibling Tag"),
        ]),
        React.createElement("div", { id: "child2" }, [
                React.createElement("h1", {}, "I Am an H1 Tag"), 
                React.createElement("h2", {}, "I Am an sibling Tag")
            ]),
]);









const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);