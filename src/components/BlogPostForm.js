import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit,initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.label}>Enter title</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
            <Text style={styles.label}>Enter title</Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
            <Button
                title="Save blog post"
                onPress={() => onSubmit(title, content)}
               
            />
        </View>
    );

};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    }
});
export default BlogPostForm;