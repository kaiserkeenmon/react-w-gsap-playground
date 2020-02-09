import React from "react";
import { gsap } from "gsap";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yPos: window.scrollY,
      collapsed: false
    };

    this.showLogo = this.showLogo.bind(this);
  }

  handleScroll = () => {
    const yPos = window.scrollY;

    if (yPos > 5) {
      if (!this.state.collapsed) {
        this.setState({
          collapsed: true
        });
        this.collapseHeader();
      }
    } else {
      if (this.state.collapsed) {
        this.setState({
          collapsed: false
        });
        this.expandHeader();
      }
    }
  };

  componentDidMount() {
    this.showLogo();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  showLogo() {
    gsap.to("#logo-img", { width: "70%", opacity: 1 });
  }

  collapseHeader() {
    gsap.fromTo("#logo-img", { width: "70%" }, { duration: 0.5, width: "40%" });
    gsap.to("#header", { duration: 1, height: "12vw" });
    this.setState({ collapsed: true });
  }

  expandHeader() {
    gsap.to("#header", { duration: 0.5, height: "20vw" });
    this.showLogo();
    this.setState({ collapsed: false });
  }

  render() {
    return (
      <header id="header">
        <div id="logo">
          <a href="https://kaiserkeenmon.com">
            <img
              id="logo-img"
              alt="#"
              src="https://codenwhatnot.com/wp-content/uploads/2020/02/flyingOwl_Lg.png"
            />
          </a>
        </div>
      </header>
    );
  }
}

export default App;
