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
			<Visual />
			<Department />
			<Youtube />
			<Footer />
		</>
	);
}

export default App;
