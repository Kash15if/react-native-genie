import { View } from "react-native";
// import { getComponent } from "../services/getComponents";
import UserComponents from "./UserComponents";

import { useState, useEffect } from "react";
import { ScrollView, Text, Button } from "react-native";

const Page = ({ pageId }) => {


    const [compList, setCompList] = useState();

    useEffect(() => {

        fetch('https://react-native-testapi-node.vercel.app/getPageDetailsById/' + pageId)
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data.PageStructure);
                setCompList(data.PageStructure)
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    }, [])
    return (<ScrollView>
        <View>
            {
                compList && compList.map((item) => <UserComponents CompType={item.CompType} compId={item.compId} compNAme={item.compNAme} />) //getComponent(item.CompType, item.compId, item.compNAme))
            }
            {/* <Text>Hello, World!</Text>
            <Button title="Click me" onPress={() => console.log('Button clicked')} /> */}
            {/* Add more components as needed */}
        </View>
    </ScrollView>);
}

export default Page;