import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export interface ISearchBar {
  backgroundColor: string,
  iconColor: string,
}

const SearchBar: React.FC<ISearchBar> = (props: ISearchBar) => {
  const {backgroundColor, iconColor} = props

  return (
    <>
      <div className='flex'>
        <div style={{backgroundColor: backgroundColor}} className='pl-2 rounded'>
          <input type="text" style={{background: 'transparent'}} className='text-blue-primary focus:outline-0' placeholder='Search'/>
          <IconButton aria-label="delete">
            <SearchIcon style={{color: iconColor}} />
          </IconButton>
        </div>
      </div>
  </>
  );
};

export default SearchBar;