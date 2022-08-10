import { Link, NavLink } from 'react-router-dom';

function Header() {
	const style = { color: 'hotpink' };
	return (
		<header>
			<h1>
				<Link exact to='/'>
					LOGO
				</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/department' activeStyle={style}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeStyle={style}>
						Youtube
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
