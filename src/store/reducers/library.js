import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../common/utility'

const initState = {
	books: [
		{
			title: 'Elon Musk. Biografia twórcy PayPala, Tesli, SpaceX',
			author: 'Vance Ashlee',
			img:
				'https://ecsmedia.pl/c/elon-musk-biografia-tworcy-paypala-tesli-spacex-w-iext51085456.jpg',
			yearPublication: new Date('2020-12-20'),
		},
		{
			title: 'Jak działa Google',
			author: 'Schmidt Eric , Rosenberg Jonathan',
			img: 'https://cdn-lubimyczytac.pl/upload/books/3699000/3699958/554728-352x500.jpg',
			yearPublication: new Date('2020-12-20'),
		},
		{
			title: 'Uczenie maszynowe z użyciem Scikit-Learn i TensorFlow. Wydanie II',
			author: 'Aurélien Géron',
			img: 'https://static01.helion.com.pl/global/okladki/326x466/uczem2.png',
			yearPublication: new Date('2020-10-23'),
		},
		{
			title: 'Python. Wprowadzenie. Wydanie V',
			author: 'Mark Lutz',
			img: 'https://static01.helion.com.pl/global/okladki/326x466/pytho5.png',
			yearPublication: new Date('2020-12-12'),
		},
		{
			title: 'C# od podszewki. Wydanie IV',
			author: 'Jon Skeet',
			img: 'https://static01.helion.com.pl/global/okladki/326x466/cshop4.png',
			yearPublication: new Date('2020-10-13'),
		},
		{
			title: 'Docker. Projektowanie i wdrażanie aplikacji',
			author: 'Jaroslaw Krochmalski',
			img: 'https://static01.helion.com.pl/global/okladki/145x218/docpro.png',
			yearPublication: new Date('2020-12-12'),
		},
		{
			title: 'Vue.js 2. Wprowadzenie dla profesjonalistów',
			author: 'Adam Freeman',
			img: 'https://static01.helion.com.pl/global/okladki/326x466/vue2wp.png',
			yearPublication: new Date('2020-11-20'),
		},
	],
}

const removeBook = (state, action) => {
	const newBooks = [...state.books]
	newBooks.splice(action.index, 1)
	return updateObject(state, {
		books: newBooks,
	})
}

const addBook = (state, action) => {
	state.books.push(action.book)
	return updateObject(state, {
		books: state.books,
	})
}

const editBook = (state, action) => {
	state.books[action.index] = action.book
	return updateObject(state, {
		books: state.books,
	})
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.ADD_BOOK:
			return addBook(state, action)
		case actionTypes.REMOVE_BOOK:
			return removeBook(state, action)
		case actionTypes.EDIT_BOOK:
			return editBook(state, action)
		default:
			return state
	}
}

export default reducer
