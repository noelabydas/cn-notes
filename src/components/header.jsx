import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  state = { navExpanded: false };
  render() {
    const navbarStyle = {
      backgroundColor: "rgb(251, 187, 187)",
    };
    const navbarTextStyle = {
      color: "white",
      fontSize: "28px",
      fontFamily: "'Merienda One', cursive",
    };
    if (this.props.showNav) {
      return (
        <Navbar collapseOnSelect style={navbarStyle} expand="lg">
          <Navbar.Brand
            style={navbarTextStyle}
            href="https://leonatwork.github.io/cn-notes/"
          >
            CN Notes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.props.notes.map((note) => {
                let className = "list-group-item";
                if (note.id === this.props.activeNoteID)
                  className += " active-me";
                return (
                  <Nav.Link
                    key={note.id}
                    href={"#" + note.id}
                    className={className}
                    onClick={() => this.props.handleClick(note.id)}
                    style={{ cursor: "pointer", textAlign: "center" }}
                  >
                    {note.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    return (
      <Navbar expand="lg" style={navbarStyle}>
        <Navbar.Brand
          href="https://leonatwork.github.io/cn-notes/"
          style={navbarTextStyle}
        >
          CN Notes
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
