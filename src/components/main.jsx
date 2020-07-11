import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import { notes } from "../data/notes-object";

class Main extends Component {
  state = { showResponsiveNav: false, activeNoteID: 0 };
  resize() {
    let currentShowNav = window.innerWidth < 950;
    if (currentShowNav !== this.state.showNav) {
      this.setState({ showResponsiveNav: currentShowNav });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  handleClick = (id) => {
    this.setState({ activeNoteID: id });
  };

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showResponsiveNav}
          notes={notes}
          activeNoteID={this.state.activeNoteID}
          handleClick={this.handleClick}
        />
        <Content
          showNav={this.state.showResponsiveNav}
          activeNoteID={this.state.activeNoteID}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Main;
