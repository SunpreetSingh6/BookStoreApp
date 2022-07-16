import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [value, setValue] = useState()

    return (
        <>
            <AppBar position='sticky' sx={{ backgroundColor: '#232F3D' }}>
                <Toolbar>
                    <NavLink to='/' style={{color:'white'}}>
                        <Typography>
                            <LibraryBooksIcon />
                        </Typography>
                    </NavLink>
                    <Tabs textColor="inherit" indicatorColor="primary" value={value} onChange={(e, val) => setValue(val)} sx={{ ml: 'auto' }}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                        <Tab LinkComponent={NavLink} to="/books" label="Books" />
                        <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                    </Tabs>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Header

// Toolbar helps us to provide basic structure of NavBar
// Typography helps us to render the text inside AppBar