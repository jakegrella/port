// router
import { Route, Switch } from 'react-router-dom';

// components
import Home from './Home';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Project from './Project';

import { tsInfo, ejInfo } from './projectInfo';

function App() {
	return (
		<div>
			<div>
				<Header />
			</div>

			<Switch>
				<Route path='/projects/townsquare'>
					<Project info={tsInfo} />
				</Route>
				<Route path='/projects/expat-journal'>
					<Project info={ejInfo} />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

// const tsInfo = {
// 	title: 'TownSquare',
// 	description:
// 		'Allow citizens of a community the opportunity to have their voices heard',
// 	gitHubLink: 'https://github.com/jakegrella',
// 	liveSiteLink: 'github.com/jakegrella',
// 	imgSrc: 'http://placehold.it/300.png/09f/fff',
// 	imgAlt: 'app',
// 	role: ['Design', 'Frontend', 'Backend'],
// 	tools: ['React', 'Express', 'Node', 'styled-jsx'],
// };

export default App;
