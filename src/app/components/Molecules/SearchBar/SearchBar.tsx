import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export interface ISearchBar {
  backgroundColor: string,
  hasIcon?: boolean,
  iconColor: string,
  borderColor: string,
  placeHolder: string,
}

const SearchBar: React.FC<ISearchBar> = (props: ISearchBar) => {
  const {backgroundColor, hasIcon, iconColor, borderColor, placeHolder} = props

  return (
    <>
      <div className='flex'>
        <div style={{backgroundColor: backgroundColor, borderColor: borderColor}} className='flex items-center pl-2 rounded border'>
          <input type="text" style={{background: 'transparent'}} className='text-blue-primary focus:outline-0' placeholder={placeHolder}/>
          {hasIcon &&
            <IconButton aria-label="delete">
              <SearchIcon style={{color: iconColor}} />
            </IconButton>
          }
        </div>
      </div>
  </>
  );
};

export default SearchBar;