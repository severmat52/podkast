import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar fixedTop fluid bsStyle="primary" collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}> PodKasts </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem >
            <Glyphicon glyph='home' /> Search
          </NavItem>
        </LinkContainer>
      </Nav>
      <Nav>
        <LinkContainer to={'/about'} exact>
          <NavItem >
            <Glyphicon glyph='text-background' /> About
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
