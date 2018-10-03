import React from 'react';
import { ColorPropType, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor'; 
import getInitials from '../utils/getInitials';

export default function AuthorRow({ fullname, linkText, onPressLinkText }){

	return (

		<View style={ styles.container }>
			<Avatar
				size={35}
				initials={getInitials( fullname )}
				backgroundColor={getAvatarColor( fullname ) }
			/>
			<Text 
				style={styles.text}
				numberOfLines={1}
				
			>
				{fullname}
			</Text>
			{!!linkText && (
        		<TouchableOpacity onPress={onPressLinkText}>
          			<Text numberOfLines={1}>{linkText}</Text>
        		</TouchableOpacity>
      		)}
		</View>

	);
}

const styles = {

	container: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		//backgroundColor: 'rgba(0,0,0,0.5)'
		//justifyContent: 'space-around',
	},

	text: {
		flex: 1, //This makes the Text (fullname) take up remaining space and
				//pushed the TouchableOpacity to the right margin
		marginHorizontal: 6,
	},
}

AuthorRow.propTypes = {
	fullname: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	onPressLinkText: PropTypes.func.isRequired,
}