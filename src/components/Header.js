import styles from "../styles/header.module.scss";
import "./style.css"
import { Navbar, Container, Badge, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch,
    } = CartState();
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Shopping Cart</Link>
                    </Navbar.Brand>
                    <Nav>
                        <FaShoppingCart className={styles.badge} color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                        <Link to="/cart">
                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                Go To Cart
                            </Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;