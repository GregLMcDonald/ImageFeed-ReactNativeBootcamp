//CardList.js

import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import { getImageFromId } from '../utils/api';


const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {

	static propTypes = {

		items: PropTypes.arrayOf(

			PropTypes.shape({
				id: PropTypes.number.isRequired,
				author: PropTypes.string.isRequired,
			}),

			).isRequired,

		commentsForItem: PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )).isRequired,
		onPressComments: PropTypes.func.isRequired,
	};


	// NAME = ( param1, param2, ... ) => ( SOME JSX STUFF )
	// is the same as
	// NAME = ( param1, param2, ... ) => { return ( SOME JSX STUFF )}
	//
	// but in this renderItem arrow function, we have to deconstruct some
	// props to use in the JSX expression, so we need to used curly braces
	//
	// NAME = ( params ) => {
	//    SOME JS STUFF
	//    return ( A JSX EXPRESSION );	
	// }
	//

	renderItem = ({ item: {id, author}}) => {

		const { commentsForItem, onPressComments } = this.props;
		const comments = commentsForItem[ id ];

		return (
			<Card
				fullname={author}
				image={{ uri: getImageFromId(id) }}
				linkText={ `${comments ? comments.length : 0} Comments`}
				onPressLinkText={ () => onPressComments(id)}
			/>
		);
	};

	// EXTRADATA in FLATLIST!!
	//
	//Passing commentsForItem as extraData to FlatList will make it rerender
	//the list if commentsForItem—an associative array of id:[array of comment strings]—
	//changes. This keeps the comment counts up to date!

	render(){

		const { items, commentsForItem } = this.props;

		return (

			<FlatList
				data = {items}
				renderItem = {this.renderItem}
				keyExtractor = {keyExtractor}
				extraData={commentsForItem}
			/>

		);




	}



}