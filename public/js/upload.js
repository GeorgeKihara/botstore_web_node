/*** @jsx React.DOM */

//searchbox
var searchstyle = {
    width: '300px',
    height: '40px',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: "white",
    backgroundImage: "url('../images/searchicon.png')",
    backgroundPosition: '10px 10px',
    backgroundRepeat: 'no-repeat',
    webkitTransition: 'width 0.4s ease-in-out',
    transition: 'width 0.4s ease-in-out',
    textAlign: 'center'
};
var FormComponent = React.createClass({
    render: function () {
        return (
            <form>
                <input style={searchstyle} type="text" name="search" placeholder="Search for bots"/>
            </form>
        );
    }
});
ReactDOM.render(
    <FormComponent />,
    document.getElementById('searchbox')
);

//Name label
var namestyle = {
	position: 'relative',
    width: '200px',
    height: '30px',
    border: 'black solid 2px',
    borderRadius: '3px',
    textAlign: 'center'
};
var NameComponent = React.createClass({
    render: function () {
        return (
            <input style={namestyle} type="text" placeholder="Name" />
        );
    }
});
ReactDOM.render(
    <NameComponent />,
    document.getElementById('name')
);
//Description label
var styles = {
	position: 'relative',
    width: '200px',
    height: '80px',
    border: 'black solid 2px',
    borderRadius: '3px',
    textAlign: 'center'
};
var DescComponent = React.createClass({
    render: function () {
        return (
            <input style={styles} type="text" placeholder="Description of bot" />
        );
    }
});
ReactDOM.render(
    <DescComponent />,
    document.getElementById('botdption')
);
//bot icon
var IconComponent = React.createClass({
    render: function () {
        return (
            <div>
                
            </div>
        );
    }
});
ReactDOM.render(
    <IconComponent />,
    document.getElementById('boticon')
);
//scan coode
var ScanComponent = React.createClass({
    render: function () {
        return (
            <div>
                
            </div>
        );
    }
});
ReactDOM.render(
    <ScanComponent />,
    document.getElementById('scancode')
);
//category button
var CategoryComponent = React.createClass({
    render: function () {
        return (
            <button>Category</button>
        );
    }
});
ReactDOM.render(
    <CategoryComponent />,
    document.getElementById('category')
);
//developer button
var DeveloperComponent = React.createClass({
    render: function () {
        return (
            <button>Developer</button>
        );
    }
});
ReactDOM.render(
    <DeveloperComponent />,
    document.getElementById('developer')
);
//country button
var CountryComponent = React.createClass({
    render: function () {
        return (
            <button>Country</button>
        );
    }
});
ReactDOM.render(
    <CountryComponent />,
    document.getElementById('country')
);