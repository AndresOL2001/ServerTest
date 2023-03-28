import styles from './Panel.module.css';

export interface IPanel {
  width: number;
  height: number;
  background_color: string;
  border_color: string;
  border_weight: number;
  border_radius: number;
  drop_shadow: string[];

}

const Panel: React.FC<IPanel> = ({ width,height,background_color,border_color,border_radius,border_weight,drop_shadow}) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor:`${background_color}`,  
        borderColor: `${border_color}`,
        borderRadius: `${border_radius}px`,
        boxShadow: `${drop_shadow[0]}px ${drop_shadow[1]}px ${drop_shadow[2]}px ${drop_shadow[3]}`,
        borderWidth: `${border_weight}px`,
        
      }}
      className={`border-solid`}>
    </div>
  ); 
};

export default Panel;