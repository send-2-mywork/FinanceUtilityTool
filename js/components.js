/*class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name,
      this.props.age
    );
  }
}
var mountNode = document.getElementById('header');
//var mountNode = $('#header');
ReactDOM.render(React.createElement(HelloMessage, { name: "John ", age: "25 Years" }), mountNode);*/

class PageHeader extends React.Component {
	render() {
		return React.createElement(
			'header',
			{'className':'header'},
			React.createElement(HeaderLeft, null),
      React.createElement(HeaderRight, null)
		);
	}
}

class HeaderLeft extends React.Component {
	render() {
		return React.createElement(
			'div',
			{'className':'header-left'},
			React.createElement(
				'a',
				{href:'index.html', 'className': 'logo'},
				React.createElement(
					'span',
					null,
					'Financial '
				),
				React.createElement(
					'span',
					null,
					'Utility'
				)
			)
		);
	}
}

class HeaderRight extends React.Component {
	render(){
		return React.createElement(
			'div',
      {'className': 'header-right'},
      React.createElement(
        'h1',
        null,
        'Hello'
      ),
      React.createElement(NavBar, null)
		);
	}
}

class NavBar extends React.Component {
  render(){
    return React.createElement(
      'nav',
      {'className': 'navbar navbar-default navcontainer'},
      React.createElement(
        'div',
        {'className': 'container-fluid'},
        'Rahul'
      )
    );
  }
}



var mountNode = document.getElementById('header');
//var mountNode = $('#header');
ReactDOM.render(React.createElement(PageHeader, null), mountNode);

/** Second Component **/
/*class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { items: [], text: '' };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        {'class':'headeing', 'id':'headeing'},
        'TODO'
      ),
      React.createElement(TodoList, { items: this.state.items }),
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement('input', { onChange: this.handleChange, value: this.state.text }),
        React.createElement(
          'button',
          null,
          'Add #' + (this.state.items.length + 1)
        )
      )
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return React.createElement(
      'ul',
      null,
      this.props.items.map(item => React.createElement(
        'li',
        { key: item.id },
        item.text
      ))
    );
  }
}

var secondComponent = document.getElementById('secondComponent');
ReactDOM.render(React.createElement(TodoApp, null), secondComponent);*/


