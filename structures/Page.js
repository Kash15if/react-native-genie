import { View } from "react-native";
// import { getComponent } from "../services/getComponents";
import UserComponents from "./UserComponents";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState, useEffect } from "react";
import { ScrollView, Text, Button } from "react-native";

import { useRoute } from "@react-navigation/native";

const Page = () => {
  const route = useRoute();
  const { pageId } = route.params;

  const [compList, setCompList] = useState();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      await fetch("http://192.168.152.160:8081/user/page?pageId=" + pageId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token, // Example: JWT token or API key
        },
      })
        .then((response) => response.json())
        .then((data) => {
          let pageStructure =
            data[0] && data[0].structure && data[0].structure.value
              ? JSON.parse(data[0].structure.value).PageStructure
              : {};
          // console.log(JSON.parse(data[0].structure.value).PageStructure);
          // console.log(pageStructure, pageId);
          setCompList(pageStructure);
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    })();
  }, []);
  return (
    <ScrollView>
      <View>
        {
          compList &&
            compList.map((item, index) => (
              <UserComponents
                key={index}
                CompType={item.CompType}
                compId={item.compId}
                compName={item.CompNAme}
              />
            )) //getComponent(item.CompType, item.compId, item.compNAme))
        }
        {/* <Text>Hello, World!</Text>
            <Button title="Click me" onPress={() => console.log('Button clicked')} /> */}
        {/* Add more components as needed */}
      </View>
    </ScrollView>
  );
};

export default Page;
