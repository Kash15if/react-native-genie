import { View, Text } from "react-native"

import GenericCard from "../customComponents/cards/GenericCard"
import TimeLine from "../customComponents/commons/TimeLine"
import Tab from "../customComponents/tabs/Tabs"

const getComponent = (type, id, name, data) => {


    if (type === "card") {

        const dataIn = JSON.parse(data);
        return <GenericCard title={dataIn.title} content={dataIn.content} />
    }
    else if (type === "timeline") {
        const dataIn = JSON.parse(data);
        console.log(dataIn.data)
        return <TimeLine data={dataIn.data} />
    }
    else if (type === "tab") {
        const dataIn = JSON.parse(data);
        // console.log(dataIn)
        return <Tab data={dataIn.data} />
    }
    else if (type === "carousel") {

    }
    else if (type === "list") {
        return <View>
            <Text>{data}</Text>
        </View>
    }
    else if (type === "button") {
        // return popup
    }
    else if (type === "popup") {
        // return popup
    }
    else {
        return <View></View>
    }
}

export { getComponent }