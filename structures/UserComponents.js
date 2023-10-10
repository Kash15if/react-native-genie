// import { View, Text } from "react-native"

import { useState, useEffect } from "react";
import { ScrollView, Text, Button, View } from "react-native";
import { getComponent } from "../services/getComponents";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Component = ({ CompType, compId, compName }) => {
  const [compDetails, setCompDetails] = useState();

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      await fetch(
        "http://192.168.152.160:8081/user/componentdata?compId=" + compId,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token, // Example: JWT token or API key
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          let compStructure =
            data[0] && data[0].data.value
              ? JSON.parse(data[0].data.value)
              : null;
          console.log(compStructure, compId);
          setCompDetails(compStructure);
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    })();
  }, []);

  return (
    <View>
      {compDetails ? (
        getComponent(CompType, compId, compName, compDetails)
      ) : (
        <Text>No Components available</Text>
      )}
    </View>
  );
};

export default Component;
