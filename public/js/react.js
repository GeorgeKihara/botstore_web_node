/*** @jsx React.DOM */

//searchbox
var search = {
    width: '300px',
    height: '40px',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '4px'
};
var searchstyle = {
    postion: 'relative',
    width: '260px',
    height: '30px',
    boxSizing: 'border-box',
    border: '0px #ffffff',
    borderRadius: '4px',
    fontSize: '16px',
    webkitTransition: 'width 0.4s ease-in-out',
    transition: 'width 0.4s ease-in-out'
};
var icon = {
    postion: 'relative',
    marginLeft: '2px',
    marginTop: '2px',
    width: '30px',
    height: '30px',
    overflow: 'hidden'
};
var FormComponent = React.createClass({
    render: function () {
        return (
            <form>
                <div style={search}>
                <img style={icon} src="images/searchicon.png"/>
                <input style={searchstyle} type="text" name="search" placeholder="Search for bots"/>
                </div>
            </form>
        );
    }
});
ReactDOM.render(
    <FormComponent />,
    document.getElementById('searchbox')
);

//upload button
var buttonstyle = {
    textDecoration: 'none',
    fontWeight: 'bold'
};
var UploadComponent = React.createClass({
    render: function () {
        return (
            <button><a style={buttonstyle} href="/upload">Upload a bot</a></button>
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
            <button><a style={buttonstyle} href="/upload">Edit your bot</a></button>
        );
    }
});
ReactDOM.render(
    <EditComponent />,
    document.getElementById('editbot')
);

//Commonly searched bots
var bot1 = {
    postion: 'relative',
    height: '30px',
    marginLeft: '100px',
    marginTop: '-10px'
  }
var Bot1Component = React.createClass({
    render: function () {
        return ( 
            <div style={bot1}>
                <p>Bot Store ljdfhkjdsfhksjdhfkjsdfhkj</p>
            </div>
        );
    }
});
ReactDOM.render(
    <Bot1Component />,
    document.getElementById('bot')
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


