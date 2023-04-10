import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import styles from "./ListItem.module.css";
export interface IListItem {
  icono: React.ReactNode;
  isActive: boolean;
  iconoAbierto: React.ReactNode;
  iconoCerrado: React.ReactNode;
  text: string;
}

const ListItem: React.FC<IListItem> = ({ icono, isActive, iconoAbierto, iconoCerrado, text }) => {
  const useStyles = makeStyles({
    iconStyle: {
      "& > svg": {
        minWidth: 100,
        minHeight: 100,
      },
    },
  });

  const [triggerLi, setTriggerLi] = React.useState<boolean>(isActive || false);

  useEffect(() => {
    setTriggerLi(isActive);
  }, [isActive, setTriggerLi]);

  return (
    <li role="button" onClick={() => setTriggerLi((bool) => !bool)}>
      <a className="flex justify-between rounded-lg font-serif text-secondary">
        <div className="flex items-center">
          <div className={styles.iconStyle}>{icono}</div>
          <span className="leading-[2.375rem]">{text}</span>
        </div>
        <div>
          {triggerLi ? (
            <div className={styles.iconStyle}>{iconoAbierto}</div>
          ) : (
            <div className={styles.iconStyle}>{iconoCerrado}</div>
          )}
        </div>
      </a>

      {triggerLi && (
        <ul className="ml-[45px] mt-[5px] ">
          <li className="text-xs leading-7 text-secondary font-serif">Users</li>
        </ul>
      )}
    </li>
  );
};

export default ListItem;
