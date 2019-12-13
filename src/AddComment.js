import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

class AddComment extends React.Component {
    state = {
        comment: "",
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert("adicionado!", this.state.comment);
    }

    render() {
        let commentArea = null;
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="Pode comentar..." style={styles.input} autoFocus={true}
                        value={this.state.comment} onChangeText={comment => this.setState({ comment })} 
                        />
                </View>
            )
        }

        return (
    
            )
    }
}