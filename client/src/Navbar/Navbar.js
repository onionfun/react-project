import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, NavLink,} from 'reactstrap';
  // 
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem 
  import Search from '../SearchContainer';
  //import Delete from '../DeleteUser/DeleteContainer';
  // import App from '../App';
  import { Link } from 'react-router-dom'
// import Profile from '../Profile';


  
class Navi extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <Navbar className="color-main" color="#0FC1FF" light expand="md">
          <NavbarBrand href="/">Sweater Weather</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>  
                {this.props.loggedIn ? <NavLink tag={Link} to="/" onClick={this.props.handleLogout}>Logout </NavLink> : <NavLink tag={Link} to='/login'>Login </NavLink> }
              </NavItem> */}
              {/* <NavItem>
                  <NavLink tag={Link} to="/weather">Check the weather</NavLink>
              </NavItem> */}
              <NavItem>
                {this.props.loggedIn ? <NavLink tag={Link} onClick={this.props.toggle} to="/user/edit">Change location</NavLink> : <div/>}
              </NavItem>
              {/* <NavItem>
                <NavLink tag={Link} to="/user/delete" onClick={this.props.deletedUser.bind(null, this.props.id)}>Delete Yourself</NavLink>
              </NavItem> */}
              {/* <NavItem>
                {this.props.loggedIn ? <Search location={this.props.location} submitEdits={this.props.submitEdits} /> : <div/>}
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;