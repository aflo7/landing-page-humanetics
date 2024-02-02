import { RxHamburgerMenu } from 'react-icons/rx';
import { RxDividerVertical } from 'react-icons/rx';
import { IoSearchSharp } from 'react-icons/io5';

function Nav() {
  return (
    <nav>
      <div className="mobile-nav">
        <h1>LOGO</h1>
        <RxHamburgerMenu fontSize="2.4rem" />
      </div>

      <div className="desktop-nav">
        <div>
          <h1 className="desktop-h1">LOGO</h1>
          <div style={{ display: 'flex', gap: '60px' }}>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
          </div>
        </div>

        <div>
          <IoSearchSharp
            style={{
              border: '1px solid white',
              padding: '5px',
              fontSize: '1.8rem',
              borderRadius: '1000px'
            }}
          />
          <RxDividerVertical />
          <div>React</div>
          <RxDividerVertical />
          <div>HTML</div>
          <RxDividerVertical />
          <div>CSS</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
