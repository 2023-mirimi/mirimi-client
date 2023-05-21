import * as React from 'react';
import { useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CouncilTab from '../components/councilTab';
import CalendarTab from '../components/calendarTab';
import MapTab from '../components/mapTab';

const FirstRoute = () => (
  <CouncilTab/>
);

const SecondRoute = () => (
  <CalendarTab />
);

const ThirdRoute = () => (
  <MapTab />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
	third: ThirdRoute
});

const School = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '학생회' },
    { key: 'second', title: '학사일정' },
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
    <TabView
			style={{marginTop: 100}}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
			renderTabBar={renderTabBar}
    />
  );
}

export default School;