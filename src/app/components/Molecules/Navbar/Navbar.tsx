import { Container } from '@material-ui/core';
import Image from 'next/image';


export interface IBaseTemplate {
  image: string;
  item: string;
  height: number;
  width: number;
}

const Navbar: React.FC<IBaseTemplate> = ({image, item, width, height}) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='w-2/3 flex gap-20 justify-center p-5 relative'>
          <Image
            priority
            src={image}
            height={height}
            width={width}
            alt=""
          />
          <div className='flex items-center'>

            <div className='pr-5 py-4 border-r-[1px] border-sky-400'>
              <ul className='flex gap-3'>
                <li>Home</li>
                <li className=''>About</li>
                <li>Our services</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className='ml-5'>
              <ul className='flex gap-3'>
                <li className=''>Careers</li>
                <li className=''>Academy</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};

export default Navbar;