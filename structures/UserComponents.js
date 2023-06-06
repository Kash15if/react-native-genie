// import { View, Text } from "react-native"

import { useState, useEffect } from "react";
import { ScrollView, Text, Button, View } from "react-native";
import { getComponent } from "../services/getComponents";



const Component = ({ CompType, compId, compNAme }) => {


    const [compDetails, setCompDetails] = useState();

    useEffect(() => {

        fetch('https://react-native-testapi-node.vercel.app/getComponentDataById/' + compId)
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                // console.log(compId + data.compData);
                setCompDetails(data.compData)
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    }, [])

    return (<View>{
        compDetails && getComponent(CompType, compId, compNAme, compDetails)
    }</View>);
}

export default Component;