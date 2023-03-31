import { makeStyles } from '@material-ui/core';
import React, { ComponentClass, ElementType, useEffect } from 'react';
import styles from './ListItem.module.css';

export interface IListItem {
  icono: any;
  isActive:boolean;
  iconoAbierto: any;
  iconoCerrado: any;
  text:string;
}

const BaseTemplate: React.FC<IListItem> = ({ icono,isActive,iconoAbierto,iconoCerrado,text}) => {

  const useStyles = makeStyles({
    iconStyle: {
      "& > svg": {
        minWidth: 100,
        minHeight: 100
      }
    }
  });

  const [triggerLi, setTriggerLi] =React.useState(isActive ?? false);

  useEffect(() => {
    setTriggerLi(isActive);
  },[isActive,setTriggerLi])

  return  <li onClick={() => setTriggerLi((bool) => !bool)}>
        <a className="flex justify-between rounded-lg font-serif text-secondary">
          <div className='flex items-center'>
          <div className={styles.iconStyle}>{icono}</div>
{/*           <SettingsOutlinedIcon className="mr-3" style={{ color: '#0072B5' }} />
 */}          <span className="leading-[2.375rem]">{text}</span>
          </div>
          <div>
          {triggerLi ? (
                      <div className={styles.iconStyle}>{iconoAbierto}</div>
          /*   <KeyboardArrowUpIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }}/> */
          ):
        (
          <div className={styles.iconStyle}>{iconoCerrado}</div>
          /*   <KeyboardArrowDownIcon className="cursor-pointer mt-2" style={{ color: '#1B3156' }} /> */
        )}
          </div>
        </a>
        
        {triggerLi == true && (
            <ul className='ml-[45px] mt-[5px] '>
              <li className='text-xs leading-7 text-secondary font-serif'>Users</li>
          </ul>
        )}
      </li>
};

export default BaseTemplate;