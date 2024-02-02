import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxDividerVertical } from 'react-icons/rx';
import { IoSearchSharp } from 'react-icons/io5';

const App = () => {
  return (
    <>
      <nav>
        <div className="mobile-nav">
          <h1>LOGO</h1>
          <RxHamburgerMenu fontSize="2.4rem" />
        </div>

        <div className="desktop-nav">
          <div>
            <h1 className="desktop-h1">LOGO</h1>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
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

      <div className="bottom-nav-wrapper-outer">
        <div className="bottom-nav-wrapper">
          <div className="bottom-nav">
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
          </div>
        </div>
      </div>

      <div className="main-wrapper">
        <main>
          <h1 className="humans-in-motion-header">Humans In Motion</h1>
          <p>
            This page was made by Andres. I wanted to show off my development
            skills. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla repellat repudiandae provident voluptate repellendus assumenda
            dolorem autem. Porro sed rerum sint hic, cum similique eius at
            voluptatum, ducimus voluptate, est illum magnam excepturi! A dolorum
            repellendus modi error voluptas, natus dolorem adipisci ad alias
            saepe earum optio veritatis repellat possimus!
          </p>
          <h2 className="we-are-humanetics-header">We Are Humanetics</h2>
        </main>
      </div>

      <div className="protecting-humans-wrapper">
        <div className="protecting-humans">
          <h2 className="protecting-humans-header">
            Protecting Humans In Motion
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            itaque id accusantium ea quo totam, qui quae facere odio enim, alias
            rerum facilis eius fuga fugiat est natus magnam et sint quam eaque?
            Esse delectus aut accusantium sequi explicabo inventore dignissimos,
            assumenda excepturi nostrum numquam, animi reiciendis blanditiis
            molestiae eum. Expedita fugiat labore aut reiciendis cupiditate
            voluptatibus, temporibus neque, ad obcaecati beatae aspernatur
            corporis odit commodi iusto, laboriosam dicta impedit accusamus.
            Odio fugiat, atque exercitationem quisquam aliquid provident ipsum,
            aut pariatur accusamus nemo omnis excepturi dignissimos voluptate
            ratione doloribus commodi nulla, facere alias reiciendis similique
            explicabo quod eligendi quasi adipisci! Corporis at inventore
            eligendi. Explicabo, nam iste. Doloremque numquam inventore
            temporibus, quas esse nesciunt a nisi repellendus, pariatur
            necessitatibus laboriosam ab? Possimus, et distinctio quae corporis
            praesentium molestias ipsam deserunt quia excepturi minus eligendi
            nobis. Dolores autem dignissimos quis sequi distinctio! Nam adipisci
            beatae omnis incidunt veritatis vero quae hic.
          </p>
        </div>
      </div>
      <div className="humanetics-wrapper">
        <div className="humanetics-img"></div>
      </div>

      <div className="man-wrapper">
        <div className="man-img"></div>
      </div>
    </>
  );
};

export default App;
