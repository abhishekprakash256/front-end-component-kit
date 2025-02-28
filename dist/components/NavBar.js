// NavBar.tsx
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
// Custom hook for routing (to be used both in Vite/React and Next.js)
const useRouterHook = (router) => {
    // In Next.js, use the passed router prop, otherwise use react-router in Vite
    return router || (window === null || window === void 0 ? void 0 : window.history);
};
const NavBar = ({ router }) => {
    const [theme, setTheme] = useState('light');
    const [isThemeInitialized, setIsThemeInitialized] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // For search input
    // Use custom router hook
    const navigation = useRouterHook(router);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        setIsThemeInitialized(true);
    }, []);
    useEffect(() => {
        if (isThemeInitialized) {
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
            // If in Next.js, navigate using the router prop passed in
            if (navigation && typeof navigation.push === 'function') {
                navigation.push(`/search/${encodeURIComponent(searchTerm)}`);
            }
            else {
                // If in React/Vite, use window history (for Vite with react-router)
                window.location.href = `/search/${encodeURIComponent(searchTerm)}`;
            }
        }
    };
    if (!isThemeInitialized) {
        return null;
    }
    return (_jsx(Navbar, { expand: "lg", className: "footer-header-color", children: _jsxs(Container, { fluid: true, children: [_jsxs("div", { className: "dark-switch", children: [_jsx("input", { type: "checkbox", className: "checkbox", id: "checkbox", onChange: toggleTheme, checked: theme === 'dark' }), _jsxs("label", { htmlFor: "checkbox", className: "checkbox-label", children: [_jsx(FontAwesomeIcon, { icon: faMoon, style: { marginRight: '10px' } }), _jsx(FontAwesomeIcon, { icon: faSun }), _jsx("span", { className: "ball" })] })] }), _jsx(Navbar.Brand, { className: "navbar-brand bold", href: "/", children: "Abhi" }), _jsx(Navbar.Toggle, { "aria-controls": "navbarScroll" }), _jsxs(Navbar.Collapse, { id: "navbarScroll", children: [_jsxs(Nav, { className: "me-auto my-2 my-lg-0", style: { maxHeight: '150px' }, navbarScroll: true, children: [_jsx(Nav.Link, { className: "nav-link bold-links", href: "/about", children: "About" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/section/tech", children: "Tech" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/section/project", children: "Project" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/section/life", children: "Life" }), _jsx(Nav.Link, { className: "nav-link bold-links", href: "/contact", children: "Contact" })] }), _jsxs(Form, { className: "d-flex", onSubmit: handleSearch, children: [_jsx(Form.Control, { type: "search", placeholder: "Search", className: "me-2 custom-border form-control custom-placeholder", "aria-label": "Search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }), _jsx(Button, { className: "button-custom-color", type: "submit", children: "Search" })] })] })] }) }));
};
export default NavBar;
