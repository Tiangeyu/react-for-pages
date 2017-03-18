
require("../../lib/comm.js");
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Home extends React.Component {
	render() {
		return (
			<div>
				<h3>I'am home</h3>
				<a href="index.html">指向主页</a>
			</div>
		)
	}
};

ReactDOM.render(<Home></Home>,$("#home")[0]);