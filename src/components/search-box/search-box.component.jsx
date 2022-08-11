import './search-box.css'


const SearchBox = ({id, className, searchHandler, clearSearchHandler, placeholder}) => (
    <div id={id} className={className}>
      <form className="row g-1">
        <div className="col-auto">
          <label htmlFor="search-input" className="visually-hidden">Search</label>
          <input type="text" className="form-control" id="search-box-input" onChange={searchHandler}
                 placeholder={placeholder}/>
        </div>
        <div className="col-auto">
          <button id="clear-search" type="button" className="btn btn-primary" onClick={clearSearchHandler}>Clear
          </button>
        </div>
      </form>
    </div>
)

export default SearchBox;