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
    borderStyle: 'none',
    fontSize: '16px'
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
                    <img style={icon} src="images/searchicon.png" />
                    <input style={searchstyle} type="text" name="search" placeholder="Search for bots" />
                </div>
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
            <div>
            Category:
            <select>
                <option value="games">Games</option>
                <option value="health">Health</option>
                <option value="community">Community</option>
                <option value="music">Music</option>
            </select>
            </div>
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
            <div>
            Developer:
            <select>
                <option value="nodejs">Node Js</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
            </select>
            </div>
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
            <div>
            Country:
            <select>
                <option value="kenya">Kenya</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="china">China</option>
            </select>
            </div>
        );
    }
});
ReactDOM.render(
    <CountryComponent />,
    document.getElementById('country')
);
//uploadbot
var UploadBotComponent = React.createClass({
    render: function () {
        return (
            <form>
                <button>Upload</button>
            </form>
        );
    }
});
ReactDOM.render(
    <UploadBotComponent />,
    document.getElementById('uploadbot')
);