import React, {useRef} from 'react'

import PropTypes from 'prop-types';

 
 const SearchBar = ({searchTodos}) => {
  const text = useRef('');

const onChange = e => {
  searchTodos(text.current.value);
}
  return (
    <nav style={{ marginBottom: '30px'}} className="pink">
<div className="nav-wrapper">
  <form>
    <div className="input-field">
      <input id="search" type="search" placeholder='Search Todos..' ref={text} onChange={onChange} />
      <label className="label-icon" htmlFor="search">
        <i className="material-icons">search</i>
        </label>
      <i className="material-icons">close</i>
    </div>
  </form>
</div>
</nav>
  )
}

SearchBar.propTypes = {
  searchTodos: PropTypes.func.isRequired,
}

export default SearchBar;