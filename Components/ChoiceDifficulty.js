import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

// Init data for difficulty of task
const DIFFICULTY = [
    {
        id: "0",
        title: "Easy",
    },
    {
        id: "1",
        title: "Medium",
    },
    {
        id: "2",
        title: "Hard",
    },
];

// Create a Item
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const ChoiceDifficulty = (props) => {
    const {selectedIdDifficulty} = props;
    const {setSelectedIdDifficulty} = props;

    // Method for choice item if is selected
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedIdDifficulty ? "black" : "white";
        const color = item.id === selectedIdDifficulty ? 'white' : 'black';

        return (
            
            <Item
                item={item}
                onPress={() => setSelectedIdDifficulty(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            
          <Text style={styles.label}>Please select your difficulty :</Text>
            <FlatList
                style={styles.listSelect}
                data={DIFFICULTY}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedIdDifficulty}
                horizontal
            />
        </SafeAreaView>
    )
};



const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        marginBottom: 20
    },
    listSelect: {
        alignSelf: 'center',
    }
});

export default ChoiceDifficulty;