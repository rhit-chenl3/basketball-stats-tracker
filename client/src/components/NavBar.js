import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Statracker
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          {user ? (
            <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
          ) : (
          <>
            <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}

export default NavBar;