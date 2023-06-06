import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';

import { ScrollView } from 'react-native';
export default ({ data }) => {
    const [index, setIndex] = React.useState(0);

    return (
        <><ScrollView horizontal>
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
            <TabView value={index} onChange={setIndex} animationType="spring">
                {
                    data.map(item =>
                        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                            <Text h1>{item.content}</Text>
                        </TabView.Item>
                    )
                }
            </TabView>
        </>
    );
};