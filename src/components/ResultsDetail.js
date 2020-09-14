import React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} <AntDesign name="star" size={14} color="orange" /> ,
                {result.review_count} <AntDesign name="eye" size={14} color="orange" />
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;