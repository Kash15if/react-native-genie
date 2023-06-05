import { View } from "react-native"


const getComponent = (type, id, name, data) => {

    if (type === "card") {

    }
    else if (type === "timeline") {

    }
    else if (type === "tab") {

    }
    else if (type === "carousel") {

    }
    else if (type === "list") {

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