import styles from './Panel.module.css';

export interface IPanel {
  width: number;
  height: number;
}

const Panel: React.FC<IPanel> = ({ width,height}) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
      className={`border-blue-300 border-2 border-solid rounded-[10px] bg-white`}>
    </div>
  ); 
};

export default Panel;