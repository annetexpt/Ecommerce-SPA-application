import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { CartWidget } from '../../components/cart/cartWidget/CartWidget';
import { connect } from 'react-redux';
import { userActionCreators } from '../../state/user/userActions';
import { IApplicationState } from '../../state';

type NavMenuProps = IApplicationState & typeof userActionCreators;

class NavMenuComponent extends React.PureComponent<NavMenuProps, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };
 
    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Distributed Store</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                { /* technical debt - abstract this */}
                                { !this.props.user.isLoggedIn &&
                                    <>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
                                        </NavItem>
                                    </>
                                }

                                { this.props.user.isLoggedIn && <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/logout">Logout</NavLink>
                                </NavItem> }

                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/cart">
                                        <CartWidget numberOfItems={Object.keys(this.props.cart.productIdToCartProductMap).length} />
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

const NavMenu = connect((state: IApplicationState) => state, userActionCreators)(NavMenuComponent as any);
export default NavMenu;