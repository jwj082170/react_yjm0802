import { Link, NavLink } from 'react-router-dom';

function Header(props) {
	const style = { color: 'hotpink' };
	return (
		<header className={props.type}>
			<h1>
				<Link to='/'>LOGO</Link>
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
