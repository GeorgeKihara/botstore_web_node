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

//upload button
var UploadComponent = React.createClass({
    render: function () {
        return (
            <button>Upload a bot</button>
        );
    }
});
ReactDOM.render(
    <UploadComponent />,
    document.getElementById('uploadbutton')
);

//Edit your bot
var EditComponent = React.createClass({
    render: function () {
        return (
            <button>Edit your bot</button>
        );
    }
});
ReactDOM.render(
    <EditComponent />,
    document.getElementById('editbot')
);

//Commonly searched bots
var Bot1Component = React.createClass({
    render: function () {
        return (
            <div></div>
        );
    }
});
ReactDOM.render(
    <Bot1Component />,
    document.getElementById('bot1')
);
//bot2
var Bot2Component = React.createClass({
    render: function () {
        return (
            <div></div>
        );
    }
});
ReactDOM.render(
    <Bot2Component />,
    document.getElementById('bot2')
);
//bot3
var Bot3Component = React.createClass({
    render: function () {
        return (
            <div></div>
        );
    }
});
ReactDOM.render(
    <Bot3Component />,
    document.getElementById('bot3')
);


