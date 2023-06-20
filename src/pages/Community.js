import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { useWindowDimensions, Text, StyleSheet, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllTab from "../components/competition/AllTab";
import DailyTab from "../components/community/DailyTab";
import EmploymentTab from "../components/community/EmploymentTab";
import SchoolTab from "../components/community/SchoolTab";
import ContestTab from "../components/community/ContestTab";
import Header from '../components/header';

const FirstRoute = () => (
  <AllTab/>
);

const SecondRoute = () => (
  <DailyTab />
);

const ThirdRoute = () => (
  <EmploymentTab />
);

const FourthRoute = () => (
    <SchoolTab />
);
const FifthRoute = () => (
    <ContestTab />
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
	third: ThirdRoute
});

const Community = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '전체' },
    { key: 'second', title: '일상' },
		{ key: 'third', title: '지도'}
  ]);

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: 'rgba(23, 227, 129, 1)' }}
			style={{ backgroundColor: 'rgba(255, 255, 255, 1)'}}
			renderLabel={({ route, focused }) => (
				<Text style={focused ? {color:'black'} : {color:'rgba(138, 138, 138, 1)'}}>
					{route.title}
				</Text>
			)}
		/>
	);

  return (
    <>
    <View style={{backgroundColor: '#fff'}}>
      <Header name={"학교생활"}/>
    </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
			//   renderTabBar={renderTabBar}
        />
    </>
    
  );
}

const styles = StyleSheet.create({
    container: {
        height: 812,
        backgroundColor: '#fff'
    },
    header: {
        width: 375,
        height: 44,
        marginTop: 44,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    category: {
        width: 375,
        height: 44,
        gap: 40,
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
    },
    categoryTxt: {
        fontSize: 18,
    },
    
});

export default Community;