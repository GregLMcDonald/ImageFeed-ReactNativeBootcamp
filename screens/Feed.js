import { 
	ActivityIndicator, 
	Text, 
	ViewPropTypes, 
	SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { fetchImages } from '../utils/api'; 
import CardList from '../components/CardList';

export default class Feed extends React.Component {

	static propTypes = {

		style: ViewPropTypes.style,
		commentsForItem: PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )).isRequired,
		onPressComments: PropTypes.func.isRequired,
	};

	static defaultProps = {
	
		style: null,
		commentsForItem: {},
		onPressComments: () => {},

	};


	state = {

		loading: true,
		error: false,
		items: [],
	};

	//Making componentDidMount and ASYNC function allows us to use AWAIT syntax within it.

	async componentDidMount() {

		try {

			const items = await fetchImages();

			this.setState({
				loading: false,
				items,
			});
		} catch (e) {
			this.setState({
				loading: false,
				error: true,
			});
		}

	}

	render(){

		const { loading, error, items } = this.state;
		const { style, commentsForItem, onPressComments } = this.props;

		if ( loading ){
			return <ActivityIndicator size="large" />;
		}

		if ( error ){
			return <Text>Error...</Text>;
		}

		return (

			<SafeAreaView style={style}>
				<CardList
					items={items}
					commentsForItem={commentsForItem}
					onPressComments={onPressComments}
				/>
			</SafeAreaView>
		);

	}

}