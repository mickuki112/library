import * as actionTypes from './actionTypes'

export const addBook = (book) => {
	return {
		type: actionTypes.ADD_BOOK,
		book,
	}
}

export const editBook = (book, index) => {
	return {
		type: actionTypes.EDIT_BOOK,
		book,
		index,
	}
}

export const removeBook = (index) => {
	return {
		type: actionTypes.REMOVE_BOOK,
		index,
	}
}
