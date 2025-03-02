'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/NavBar.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// ✅ Safe useRouterHook to avoid window issues
const useRouterHook = (router) => {
    if (typeof window === 'undefined') {
        return router || {}; // Return a fallback object on the server
    }
    return router || window.history;
};
const NavBar = ({ router }) => {
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
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            if (navigation && typeof navigation.push === 'function') {
                navigation.push(`/search/${encodeURIComponent(searchTerm)}`);
            }
            else if (typeof window !== 'undefined') {
                window.location.href = `/search/${encodeURIComponent(searchTerm)}`;
            }
        }
    };
    if (!isThemeInitialized) {
        return null; // ✅ Prevent rendering before initialization
    }
    return (_jsx(Navbar, { expand: "lg", className: "footer-header-color", children: _jsxs(Container, { fluid: true, children: [_jsxs("div", { className: "dark-switch", children: [_jsx("input", { type: "checkbox", className: "checkbox", id: "checkbox", onChange: toggleTheme, checked: theme === 'dark' }), _jsxs("label", { htmlFor: "checkbox", className: "checkbox-label", children: [_jsx(FontAwesomeIcon, { icon: faMoon, style: { marginRight: '10px' } }), _jsx(FontAwesomeIcon, { icon: faSun }), _jsx("span", { className: "ball" })] })] }), _jsx(Navbar.Brand, { className: "navbar-brand bold", href: "/", children: "Abhi" }), _jsx(Navbar.Toggle, { "aria-controls": "navbarScroll" }), _jsxs(Navbar.Collapse, { id: "navbarScroll", children: [_jsxs(Nav, { className: "me-auto my-2 my-lg-0", style: { maxHeight: '150px' }, navbarScroll: true, children: [_jsx(Nav.Link, { className: "nav-link bold-links", href: "/about", children: "About" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/section/tech", children: "Tech" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/section/project", children: "Project" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/section/life", children: "Life" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/contact", children: "Contact" })] }), _jsxs(Form, { className: "d-flex", onSubmit: handleSearch, children: [_jsx(Form.Control, { type: "search", placeholder: "Search", className: "me-2 custom-border form-control custom-placeholder", "aria-label": "Search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }), _jsx(Button, { className: "button-custom-color", type: "submit", children: "Search" })] })] })] }) }));
};
export default NavBar;
