import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/NotFound.css"; // Custom CSS
const NotFound = () => {
    return (_jsx(Container, { className: "m-0 p-0 text-center", children: _jsx(Row, { className: "rounded background-color-body font-color-class mt-3 m-0", children: _jsx(Col, { className: "text-center p-2 mt-3 mb-3", children: _jsxs("h1", { className: "not-found-title m-2", children: ["OOPS! SEARCH", _jsx("br", {}), "Results Not Found"] }) }) }) }));
};
export default NotFound;
