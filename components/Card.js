import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import AuthorRow from './AuthorRow';

export default class Card extends React.Component {

	static propTypes = {
		fullname: PropTypes.string.isRequired,
		image: Image.propTypes.source.isRequired,
		linkText: PropTypes.string.isRequired,
		onPressLinkText: PropTypes.func.isRequired,
	};

	static defaultProps = {
		linkText: '',
		onPressLinkText: () => {},
	};

	state = { 
		loading: true,
	};
	handleLoad = () => { 
		this.setState({ loading: false });
	};

	shouldComponentUpdate(nextProps) {
		return this.props.linkText !== nextProps.linkText
	}

	render(){

		const { fullname, linkText, image, onPressLinkText } = this.props;
		const { loading } = this.state;


		return (

			<View>
				<AuthorRow
					fullname={fullname}
					linkText={linkText}
					onPressLinkText={onPressLinkText}
				/>

				<View style={styles.image}>
					{loading && (
						<ActivityIndicator style={StyleSheet.absoluteFill} size={'large'}/>
					)}
					<Image 
						style={StyleSheet.absoluteFill} 
						source={image}
						onLoad={this.handleLoad}
					/>
					
				
				</View>

			</View>

		);
	}



}

const styles = StyleSheet.create({
	image: {
		aspectRatio: 1,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
})