import './Sidebar.module.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BusinessIcon from '@material-ui/icons/Business';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import React, { useEffect } from 'react';
import ListItem from '../../Atoms/ListItem/ListItem';

export interface ISidebar {
  sampleTextProp: string;
}

const SidebarTemplate: React.FC<ISidebar> = () => {
  return <>

    <aside id="default-sidebar"
     className="border border-light fixed top-0 left-0 w-[278px] h-[982px]
      h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full ml-[23px] mr-[43px] mt-[30px] font-sans overflow-y-auto bg-white">
        <ul className="space-y-2 ">
          <ListItem text='Dashboard' 
          icono={<DashboardOutlinedIcon className="mr-3" style={{ color: '#0072B5' }}/>} 
          iconoAbierto={<KeyboardArrowUpIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          iconoCerrado={<KeyboardArrowDownIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          isActive={false}/>
          <ListItem text='Employees' icono={<AccountCircleOutlinedIcon className="mr-3" style={{ color: '#0072B5' }}/>} 
          iconoAbierto={<KeyboardArrowUpIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          iconoCerrado={<KeyboardArrowDownIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          isActive={false}/>
          <ListItem text='Clients' icono={<BusinessIcon className="mr-3" style={{ color: '#0072B5' }}/>} 
          iconoAbierto={<KeyboardArrowUpIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          iconoCerrado={<KeyboardArrowDownIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          isActive={false}/>
          <ListItem text='Settings' icono={<SettingsOutlinedIcon className="mr-3" style={{ color: '#0072B5' }}/>} 
          iconoAbierto={<KeyboardArrowUpIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          iconoCerrado={<KeyboardArrowDownIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/>} 
          isActive={false}/>
        </ul>
      </div>
    </aside>
  </>
};

export default SidebarTemplate;