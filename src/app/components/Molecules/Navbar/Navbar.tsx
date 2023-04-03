import Image from 'next/image';
import Link from 'next/link';
import ProfileCard from '../ProfileCard/ProfileCard';
import SearchBar from '../SearchBar/SearchBar';
import { UserInfo } from '../../typing'

export interface INavbar {
  backgroundColor?: string;
  textColor?: string;
  logoUrl: string;
  showLogo?: boolean;
  showSearchBar?: boolean;
  isUserNav?: boolean;
  primary?: boolean;
  navItems: string[];
  userInformation: UserInfo; 
}

const Navbar: React.FC<INavbar> = ((props: INavbar) => {
  const {logoUrl, showLogo, showSearchBar, navItems, isUserNav, userInformation, backgroundColor, textColor, primary} = props

  const renderListOfMenu = (items:string[], styles?: string) => {
    return items?.map(item => <li className={styles}><Link href='' />{item}</li>)
  }

  return (
    <nav className='flex justify-center font-sans' style={{backgroundColor, color: textColor}}>
      <div className={primary? 'py-3 sm:w-full md:w-3/4 lg:w-2/3  flex lg:gap-20 sm:gap-18 justify-between relative': 'sm:w-full flex lg:gap-20 justify-center relative sm:px-4 sm:text-xs'}>
          {showLogo && 
          <Image
            priority
            src={logoUrl}
            height={150}
            width={180}
            alt=""
          />
        } 
        <div className='flex items-center'>
        
          {isUserNav ? (
            <>
              <div className='border-[1px] py-4 rounded border-light h-full'></div>
              <ProfileCard username={userInformation.username} occupation={userInformation.occupation} />
            </>
          ): (

            primary ? (
              <>
                <div className='absolute right-0 top-0'>
                  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-[14px]" type="button">EN | ES <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                      </ul>
                    </div>
                </div>

                <div>
                  <ul className='flex gap-3'>
                    {renderListOfMenu(navItems)}
                  </ul>
                </div>

                <div className='pl-5 py-5 border-l-[1px] border-blue-primary ml-5'>
                  <ul className='flex gap-3'>
                    <li className=''>Careers</li>
                    <li className=''>Academy</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <ul className={showSearchBar ? 'flex lg:gap-6 sm:gap-2 text-light items-center text-base' : 'flex lg:gap-14 sm:gap-6 text-light text-base items-center'}>
                  
                  {showSearchBar && 
                    <strong className='font-sans mr-4'>
                      BLOG
                    </strong>
                  }

                  {renderListOfMenu(navItems, showSearchBar ? 'py-5 font-sans' : 'last-of-type:bg-blue-primary lg:last-of-type:px-8 sm:last-of-type:px-2 lg:py-5 sm:py-3 sm:text-center font-sans')}
                </ul>

                {showSearchBar && 
                  <div className='ml-24 rounded-md'>
                    <SearchBar
                      backgroundColor="#ffff"
                      borderColor="#1067A8"
                      hasIcon
                      iconColor="#0072B5"
                      placeHolder="Search"
                    />
                  </div>
                }
              </>
            )
          )}

        </div>
      </div>
    </nav>
  )
});

export default Navbar;