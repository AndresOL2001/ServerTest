import Panel from '../../Atoms/Panel/Panel';
import styles from './Card.module.css';

export interface ICard {
  title: string;
  body: string;
}

const Card: React.FC<ICard> = ({ title,body }) => {
  return(
      <Panel width={536} height={263} background_color={'white'} border_color={'#EFEFEF'} border_weight={1} border_radius={10} drop_shadow={['0','0','10','rgba(139,139,139,0.16)']}>
      <h5 className='text-left font-serif w-[29.875rem] h-[3.813rem] ml-[29px] mr-[29px] mb-[20px] mt-[27px] font-[700]'>{title}</h5>
      <hr className=' mt-[15px] ml-[29px] mr-[29px]'></hr>
      <p className='text-sm text-left w-[29.875rem] h-[7.813rem] text-secondary mt-[20px] pb-8 ml-[31px] mr-[27px] font-[400]'>{body}</p>
      </Panel>
  );
};

export default Card;