import Timeline from "react-native-timeline-flatlist"



const TimeLine = ({ data }) => {
    return (



        <Timeline
            //..other props
            data={data}
            circleSize={20}
            circleColor='rgb(45,156,219)'
            lineColor='rgb(45,156,219)'
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
            descriptionStyle={{ color: 'gray' }}
            options={{
                style: { paddingTop: 5 }
            }}
            isUsingFlatlist={true}
            innerCircle={'dot'}

        />
    );
}

export default TimeLine;