import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='post'>Post</Link></li>
                    <li><Link to='user'>Users</Link></li>
                </ul>
            </nav>
        </header>
    );
}