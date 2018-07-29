import React, { Component } from 'react';

class Background extends Component {
	render() {
		return (
			<div>
				<img src={this.props.img_src} alt="" />
			</div>
		);
	}
}

export default Background;