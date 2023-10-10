import { View } from "react-native";

import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  FlatList,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from "react-native";

const Menu = ({ navigation }) => {
  const [menuList, setMenuList] = useState();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      // console.log(token);
      await fetch("http://192.168.152.160:8081/user/menu", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token, // Example: JWT token or API key
        },
      })
        .then((response) => response.json())
        .then((data) => setMenuList(data))
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    })();
  }, []);

  const handleItemClick = (item) => {
    // console.log('Clicked item:', item.pageId);
    // Perform any actions or navigation here

    navigation.navigate("Pages", { pageId: item.pageid });
  };

  // Render each item as a clickable TouchableOpacity
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View>
        <Text>{item.pagelabel}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    menuList && (
      <FlatList
        data={menuList}
        renderItem={renderItem}
        keyExtractor={(item) => item.pageid}
      />
    )
  );
};

export default Menu;
