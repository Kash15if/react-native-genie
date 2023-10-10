import { View, Text } from "react-native";

import GenericCard from "../customComponents/cards/GenericCard";
import TimeLine from "../customComponents/commons/TimeLine";
import Tab from "../customComponents/tabs/Tabs";

const getComponent = (type, id, name, data) => {
  if (type === "card") {
    return <GenericCard title={data.title} content={data.content} />;
  } else if (type === "timeline") {
    return <TimeLine data={data.data} />;
  } else if (type === "tab") {
    return <Tab data={data.data} />;
  } else if (type === "table") {
    return <Tab data={data.data} />;
  } else if (type === "carousel") {
  } else if (type === "list") {
    return (
      <View>
        <Text>{data}</Text>
      </View>
    );
  } else if (type === "button") {
    // return popup
  } else if (type === "popup") {
    // return popup
  } else {
    return <View></View>;
  }
};

export { getComponent };
