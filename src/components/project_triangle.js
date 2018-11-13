import React, { Component } from 'react';
import Image1 from './../assets/triangle/1b.jpg';
import Image5 from './../assets/triangle/5b.jpg';

class ProjectTriangle extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
			<div className="project__content">
				<p>
					Tri-Angle is 3 triangular/modular lamps that can be placed at different angles. Tri-Angle consists of three tri-angular shaped pieces that lights up when another modular piece is connected with it.
				</p>
				<img className="project__image" src={Image1} />

				<h2>Role</h2>
				<p>
					For this project, I was in charge of the prototyping and designing of the lamp. I diagramed the plans out for the lamp and laser cutted them out in a workshop. I also did 3-D Models to do an exploded view of the Tri-Angle lamp. I also made a poster to showcase our lamp at the SFU showcase and at the Vancouver Maker Faire.
				</p>
				<p>
					Please check out our <a href="https://iat336teamnegatron.wordpress.com">team blog</a> for a more indepth look of the process and behind the scenes!
				</p>

				<img className="project__image" src={Image5} />

				<div className="project__collab-skills">
					<div className="project__collaborators">
						<h3>Collaborators</h3>
						<p>Bobby Soetarto</p>
						<p>Amanda Mutsaerts</p>
						<p>Nicky Fung</p>
					</div>

					<div className="project__skills-used">
						<h3>Technologies Used</h3>
						<p>Illustrator</p>
						<p>Corel Draw</p>
						<p>Solid Works</p>
					</div>
				</div>

				<iframe className="project__video" width="100%" height="315" src="https://www.youtube.com/embed/AkVmbeIwZDE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		)
	}
}

export default ProjectTriangle;