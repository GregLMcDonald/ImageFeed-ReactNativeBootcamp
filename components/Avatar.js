import React from 'react';
import { ColorPropType, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


export default function Avatar( { size, backgroundColor, initials }){

	const style = {
		width: size,
		height: size,
		backgroundColor: backgroundColor,
		borderRadius: size / 2,
	}

	return (

		<View style={[ styles.container, style ]}>
			<Text style={styles.textStyle}>{initials}</Text>
		</View>

	);


}

const styles = StyleSheet.create({ 
	container: {
    	alignItems: 'center',
    	justifyContent: 'center',
  	},

  	textStyle: {
  		//color: '#ddd',
  		color: 'white',
  		//backgroundColor: 'black',
  	}
});

Avatar.propTypes = {
	initials: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	backgroundColor: ColorPropType.isRequired,
}