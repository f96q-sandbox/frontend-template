import React from 'react'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <AppBar showMenuIconButton={false} />
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item</MenuItem>
    </div>
  )
}

export default SideMenu
