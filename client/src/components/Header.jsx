import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap'

function Header() {
    return (
        <header>
            <h1>All Sparkling Clean</h1>
            <img className="logo-img" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/309117349_107089165504571_1684772143335323691_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=F_0uCVf17PcAX9VN82L&_nc_ht=scontent-dfw5-2.xx&oh=00_AfCbo9yXaZ05A7M-p9UK3tyk2zU1l97tB9zo3RT5svVZFw&oe=64F1847C" />

            <div className='header-btns'>
                <Link to='/'><Button>Home</Button></Link>
                <Link to='/schedule'><Button>Schedule</Button></Link>
                <Link to='/pricing'><Button>About</Button></Link>
            </div>
        </header>
    );
}

export default Header;