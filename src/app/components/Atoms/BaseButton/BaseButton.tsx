import './BaseButton.module.css';
import React, {useState} from 'react';

export interface IBaseButton {
  sampleTextProp: string;
  onclickProp: () => void;
  disable: boolean;
  size?: 'normal' | 'small' | 'mini';
  isDragging?: 'dragging' | '';

}

const BaseButton: React.FC<IBaseButton>  = ({ 
  onclickProp, 
  sampleTextProp, 
  disable,
  size = 'mini'}) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (event: React.DragEvent<HTMLButtonElement>) => {
      event.dataTransfer.setData('text/plain', '');
      setIsDragging(true);
    };
  
    const handleDragEnd = () => {
      setIsDragging(false);
    };
  
    return (
      <button
     draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      disabled={disable ? true : false}
      className={`primary button--${size} primary--${isDragging}` } onClick={onclickProp}>
      {sampleTextProp}
    </button>
  );
};


export default BaseButton;