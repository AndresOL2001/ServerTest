import Image from 'next/image';
import Link from 'next/link'


export interface INavbar {
  logo: string;
  items: string[];
  height: number;
  width: number;
}

const Navbar: React.FC<INavbar> = ({logo, items, width, height}) => {
  
  const renderListOfUserNames = (items:string[]) => {
    return items?.map(item => <li><Link href=''></Link>{item}</li>)
  }

  return (
    <>
      <div className='flex flex-col items-center font-sans'>
        <div className='w-2/3 flex gap-20 justify-center p-5 relative'>
          <Image
            priority
            src={logo}
            height={height}
            width={width}
            alt=""
          />
          <div className='flex items-center'>

            <div className='pr-5 py-4 border-r-[1px] border-sky-400'>
              <ul className='flex gap-3'>
                {renderListOfUserNames(items)}
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