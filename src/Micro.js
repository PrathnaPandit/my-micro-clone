import illustration from "./illustration.jpg";

export default function Micro() {
    return (
      <div>
        <nav id="navbar">
          <ul>
            <li className="logo">Micro</li>
            <li className="submenu">Products <i class="fa fa-angle-down"></i></li>
            <li className="submenu">Resources <i class="fa fa-angle-down"></i></li>
            <li className="submenu">Company <i class="fa fa-angle-down"></i></li>
  
            <li className="active">Signup</li>
            <li className="active">Login</li>
          </ul>
          <div className="divider" />
        </nav>
  
        <div className="main">
         
          <p className="heading">Become a Partner<br />with <b>Micro</b></p>

          <p className="description">
            Start Investing with as little at 5k in <br /> 
            alternate asset classes and reap its benifits.</p>

          <button className="invest">Invest now</button>
          <img className="illustration" src={illustration} alt="illustration"/>
        </div>
  
      </div>
    );
  }
  