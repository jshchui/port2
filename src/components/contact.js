import React, { Component } from 'react';
import ProfileImg from './../assets/me.png';


class ContactPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
			<div className="project__content">
      	<img className="profile-img" src={ProfileImg} />
				<p>
				  I am Front-end Developer and a design student graduate from Simon Fraser University Majoring in the School of Interactive Arts and Technology.
        </p>

        <p>
          Outside of design, I enjoy wondering why I lost my last League of Legends game and browsing about new technology, games, and creative designs .
        </p>

        <p>If you would like to collaborate or just have a chat, feel free to contact my E-mail or Phone!</p>
        <p>E-mail: jshchui@gmail.com</p>
        <p>Git Hub: <a href="https://github.com/jshchui">jshchui</a></p>
        <p>Phone: 778-926-5883</p>
        <p>Resume: <a href="img/resume.pdf">Link</a></p>
			</div>
		)
	}
}

export default ContactPage;