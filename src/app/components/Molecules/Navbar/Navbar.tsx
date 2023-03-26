import Image from 'next/image';
import Link from 'next/link';

export interface INavbar {
  backgroundColor?: string;
  logo: string;
  height: number;
  width: number;
  userNav?: boolean;
  items: string[];
  userInfo: any; 
}

const Navbar: React.FC<INavbar> = ({logo, items, width, height, userNav, userInfo, backgroundColor}) => {
  
  const renderListOfUserNames = (items:string[]) => {
    return items?.map(item => <li><Link href=''></Link>{item}</li>)
  }

  return (
    <>
      <div className='flex flex-col items-center py-3 font-sans' style={{backgroundColor}}>
        <div className='w-2/3 flex gap-20 justify-between relative'>
          <Image
            priority
            src={logo}
            height={height}
            width={width}
            alt=""
          />
          <div className='flex items-center'>
          
            {userNav ? (
              <>
                <div className='border-[1px] rounded border-light h-full'></div>
                <div className='flex items-center ml-4'>
                  <Image
                    priority
                    style={
                      {borderRadius: 50,
                      borderColor: '#ffff',
                      borderWidth: 1,
                      }
                    }
                    src={'/perfil.jpg'}
                    height={40}
                    width={40}
                    alt=""
                  >
                  </Image>
                  <div className='flex flex-col ml-3 '>
                    <div className='text-light text-sm'>Welcome, <strong>{userInfo.username}</strong></div>
                    <div className='text-light text-sm'>{userInfo.occupation}</div>
                  </div>
                </div>
              </>
            ): (
              <>
                <div className='pr-5 py-4 border-r-[1px] border-blue-primary'>
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
              </>
              
            )}
          </div>
        </div>
      </div>
    </>
  )
};

export default Navbar;