import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';

//sub
import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />

			<Footer />
		</>
	);
}

export default App;
