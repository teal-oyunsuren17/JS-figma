import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Header3() {
    return (
        <div className='d-flex flex-row gap-5'>
            <div>
             <DropdownButton id="dropdown-basic-button" title="Browse categories">
               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton>
            </div>

            <div className='d-flex flex-row'>
            <DropdownButton id="dropdown-basic-button" title="Home">
               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton>

             <DropdownButton id="dropdown-basic-button" title="Catalog">
               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton>

             <a href='#'>Blog</a>

             <DropdownButton id="dropdown-basic-button" title="Pages">
               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton>

             <a href='#'>About us</a>
            </div>
            <p>30 days free return</p>
        </div>
    )
}