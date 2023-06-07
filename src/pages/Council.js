import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions, Linking } from 'react-native';
import background from '../assets/councilBg.png';
import profile from '../assets/councilProfile.png';
import music from '../assets/music.png';
import link from '../assets/link.png';
import instagram from '../assets/instagram.png';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import CouncilTab from '../components/school/councilTab';
const FirstRoute = () => (
    <CouncilTab/>
);

const SecondRoute = () => (
    <CouncilTab/>
);

const ThirdRoute = () => (
    <CouncilTab/>
);

const FourthRoute = () => (
    <CouncilTab/>
);

const FifthRoute = () => (
    <CouncilTab/>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute
});

const Council = ({ navigation }) =>  {

	console.log(navigation)
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: '전체' },
        { key: 'second', title: '이벤트' },
        { key: 'third', title: '공지'},
        { key: 'fourth', title: '사진첩'},
        { key: 'fifth', title: '기타'}
    ]);

      const renderTabBar = (props) => (
          <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'rgba(23, 227, 129, 1)'}}
              style={{ backgroundColor: 'rgba(255, 255, 255, 1)'}}
              renderLabel={({ route, focused }) => (
                  <Text style={focused ? {color:'black'} : {color:'rgba(138, 138, 138, 1)'}}>
                      {route.title}
                  </Text>
              )}
          />
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={background} style={styles.backgroundImg}/>
                <View style={styles.headerContents}>
                    <Image source={profile} style={styles.profileImg}/>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfm1yYfqXuk3cd5_1SWV9WbDCG4PW4C7ZOu1B5fKbutCZQnmw/viewform')}><Image source={music}/></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://student-council-git-main-55soup.vercel.app/#/')}><Image source={link}/></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.instagram.com/mirim_student')}><Image source={instagram}/></TouchableOpacity>
                    </View>
                    <Text style={styles.title}>안녕하세요! 32기 학생회입니다.</Text>
                    <Text style={styles.content}>안녕하세요! 32기 학생회입니다.</Text>
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 211-123
    },
    headerContainer: {
        height: 254
    },
    backgroundImg: {
        width: '100%',
        height: 123
    },
    profileImg: {
        marginTop: -50,
        marginLeft: 16
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -50
    },
    button: {
        marginRight: 16
    },
    title: {
        marginTop: 25,
        marginLeft: 16,
        fontSize: 16,
        fontWeight: 500
    },
    content: {
        marginLeft: 16,
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(114, 114, 114, 1)'
    }
});

export default Council;