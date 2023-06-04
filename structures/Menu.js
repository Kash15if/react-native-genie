import { View } from "react-native";

import { useEffect, useState } from "react";

import { FlatList, TouchableHighlight, Text, TouchableOpacity } from 'react-native';

const Menu = () => {


    const [menuList, setMenuList] = useState();

    useEffect(() => {

        fetch('https://react-native-testapi-node.vercel.app/menu')
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data.assignedPages);
                setMenuList(data.assignedPages)
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    }, [])


    const handleItemClick = (item) => {
        console.log('Clicked item:', item);
        // Perform any actions or navigation here
    };


    // Render each item as a clickable TouchableOpacity
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
            <View>
                <Text>{item.label}</Text>
            </View>
        </TouchableOpacity>
    );


    return (menuList && <FlatList
        data={menuList}
        renderItem={renderItem}
        keyExtractor={(item) => item.pageId}
    />
    )
}



export default Menu;