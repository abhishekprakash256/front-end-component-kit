'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/NavBar.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// ✅ Safe useRouterHook to avoid window issues
const useRouterHook = (router?: any) => {
  if (typeof window === 'undefined') {
    return router || {}; // Return a fallback object on the server
  }
  return router || window.history;
};

interface NavBarProps {
  router?: any;
}

const NavBar: React.FC<NavBarProps> = ({ router }) => {
  const [theme, setTheme] = useState('light');
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Ensure safe navigation handling
  const navigation = useRouterHook(router);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      setIsThemeInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isThemeInitialized && typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, isThemeInitialized]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      if (navigation && typeof navigation.push === 'function') {
        navigation.push(`/search/${encodeURIComponent(searchTerm)}`);
      } else if (typeof window !== 'undefined') {
        window.location.href = `/search/${encodeURIComponent(searchTerm)}`;
      }
    }
  };

  if (!isThemeInitialized) {
    return null; // ✅ Prevent rendering before initialization
  }

  return (
    <Navbar expand="lg" className="footer-header-color">
      <Container fluid>
        <div className="dark-switch">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <FontAwesomeIcon icon={faMoon} style={{ marginRight: '10px' }} />
            <FontAwesomeIcon icon={faSun} />
            <span className="ball"></span>
          </label>
        </div>

        <Navbar.Brand className="navbar-brand bold" href="/">
          Abhi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll>
            <Nav.Link className="nav-link bold-links" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/section/tech">
              Tech
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/section/project">
              Project
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/section/life">
              Life
            </Nav.Link>
            <Nav.Link className="nav-link bold-links" href="/contact">
              Contact
            </Nav.Link>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-border form-control custom-placeholder"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="button-custom-color" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
