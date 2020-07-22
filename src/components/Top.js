import React,{useState} from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
  } from "shards-react";
  import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default function Top() {

    const [open,setOpen] = useState(false);
    return (
        <Route >
        <Navbar type="dark" theme="primary" expand="md">
          <Link to="/"><NavbarBrand href="#">Notes7 - InfoTech</NavbarBrand></Link>
          <NavbarToggler onClick={()=> setOpen(!open)} />

          <Collapse open={open} navbar>
            <Nav navbar>
              <NavItem>
              <Link to="/notes">
                <NavLink active href="notes">
                  Notes
              </NavLink>
              </Link>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
        </Route>
    )
}
