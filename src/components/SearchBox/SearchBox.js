import React from 'react';

const SearchBox = ({filterChange,searchChange}) => {
	return (
		<div className='pa3 dib'>
			<form>
				<select
				className='pa2 ma2 ba br2 b--dark-gray bg-moon-gray'
				// value={this.state.filter}
				onChange = {filterChange}
				>
					<option value='filterByName'>Name</option>
					<option value='filterByJob'>Job</option>
				</select>
				<input
				className='pa3 ba br2 b--dark-gray bg-moon-gray'
				type='search'
				placeholder='Search Robots'
				onChange = {searchChange}
				/>
			</form>
		</div>
	)
}

export default SearchBox