import { Route } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';

//sub
import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/'>
				<Visual />
			</Route>

			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />

			<Footer />
		</>
	);
}

export default App;
