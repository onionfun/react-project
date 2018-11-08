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
  import Search from '../SearchContainer/SearchContainer';
  //import Delete from '../DeleteUser/DeleteContainer';
  import App from '../App';
  import { Link } from 'react-router-dom'


  
class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Sweater Weather</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>  
               <NavLink tag={Link} to='/'>Logout </NavLink>        
              </NavItem>
             
              <NavItem>
                <NavLink tag={Link} to="/users/:id/edit">Edit Profile</NavLink> 

              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/users/:id" onClick={this.props.deletedUser.bind(null, this.props.id)}>Delete Yourself</NavLink>
               
              </NavItem>
              <NavItem>  
                <Search />            
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Location
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Edit
                  </DropdownItem>
                  <DropdownItem>
                    Zip Code(input space)
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;