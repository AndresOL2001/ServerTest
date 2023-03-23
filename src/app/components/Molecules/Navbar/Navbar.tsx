import Image from 'next/image';


export interface IBaseTemplate {
  image: string;
  item: string;
}

const Navbar: React.FC<IBaseTemplate> = ({image, item}) => {
  return (
    <>
      <div className='flex'>
        <Image
          priority
          src={image}
          height={50}
          width={50}
          alt=""
        />

        <div>
          <ul>
            <li>{item}</li>
            <li className='text-orange-700'>About</li>
            <li>Our services</li>
            <li>Blog</li>
          </ul>
        </div>

      </div>
    </>
  )
};

export default Navbar;