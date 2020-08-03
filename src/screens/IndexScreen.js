import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View style={StyleSheet.row}>
            <Button title="Add Post" onPress={() => addBlogPost()} />
            <FlatList
                data={state}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                                <Feather name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                        );
                }}
                keyExtractor={blog => blog.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    icon: {
        fontSize: 24
    },
    title: {
        fontSize: 18
    }
});

export default IndexScreen;