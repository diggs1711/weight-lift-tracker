import React, { useRef, useState } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useFirebase from '../../../hooks/use-firebase'
import { Link } from 'react-router-dom'

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<EventTarget & Element | null>(null);
    const firebase = useFirebase()

	const handleSignOut = () => {
		firebase?.doSignOut()
    }

    const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
        if (!e) return null
		setAnchorEl(e.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button onClick={handleClick}>Account</Button>
			<Menu
				id="account-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/account'}>
                    Account
                    </Link>    </MenuItem>
                <MenuItem onClick={handleSignOut}><Link to={"/"}>Logout
                </Link></MenuItem>
            </Menu>
		</div>
	)
}

export default AccountMenu
