import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';

import { ScrollView } from 'react-native';

const Tabs = ({ data }) => {
    const [index, setIndex] = React.useState(0);

    console.log(data)
    return (
        data && <>
            <ScrollView horizontal>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: 'white',
                        height: 3,
                    }}
                    variant="primary"
                >
                    {
                        data.map(item => <Tab.Item
                            title={item.title}
                            titleStyle={{ fontSize: 12 }}
                            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                        />
                        )
                    }
                </Tab>
            </ScrollView>
            {/* <TabView value={index} onChange={setIndex} animationType="spring"> */}
            {
                data.filter((item, i) => index === i).map((item, i) =>
                    <TabView.Item key={i} style={{ backgroundColor: 'red', width: '100%' }}>
                        <Text h1>{item.content}</Text>
                    </TabView.Item>
                )
            }
            {/* </TabView> */}

        </>

    );
};

export default Tabs;