import React from "react"
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from "react-native";

const AllTab = () => {
    const [data, setData] = useState([
        {
            post_id: 0,
            category: '',
            title: '',
            user: '',
            date: '',
            views: '',
            comments: '',
            likes: ''
        }
    ]);
    // useEffect(() => {
    //     getData();
    // },[]);
    // const getData = async () => {
    //     await fetch('http://10.96.124.51:3300/community', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     }).then(res => res.json())
    //     .then(json =>{
    //         setData(json)})
    // }
    const renderItem = ({item}) => {
        return(
            <View key={item.id}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("DetailedCommunity",{id: item.post_id})
                }} style={styles.postBox} >
                    <Text style={styles.postCategory}>{item.category}</Text>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <View style={styles.postInfo}>
                        <Text style={styles.postInfoTxt}>{item.nickname}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.upload_date}  |</Text>
                        <Text style={styles.postInfoTxt}>{item.post_views}</Text>
                    </View>
                    <View style={styles.postLikes}>
                        <Image source={require('../assets/community/comment.png')}></Image>
                        <Text style={styles.postLikesTxt}>{item.comments}</Text>
                        <Image source={require('../assets/community/thumb.png')}></Image>
                        <Text style={styles.postLikesTxt}>{item.likes}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return(
        <View>
            {/* <View style={styles.box}>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}/>
            </View>
            <TouchableOpacity style={styles.addPost} onPress={()=> navigation.navigate('NewPost')}>
                    <Image source={require('../assets/community/floating_btn.png')}></Image>
            </TouchableOpacity> */}
            <Text>전체 탭</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 44,
        marginLeft: 16,
        marginRight: 16,
    },
    postBox: {
        width: 343,
        padding: 16,
        height: 142,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 16,
    },
    postCategory: {
        fontSize: 14,
        color: '#17E381',
        fontWeight: 'bold'
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 700,
        marginTop: 4,
        marginBottom: 8
    },
    postInfo: {
        flexDirection: 'row',
        gap: 8,
        color: '#E9E9E9'
    },
    postInfoTxt: {
        color: '#5A5A5A'
    },
    postLikes: {
        flexDirection: 'row',
        marginTop: 28,
        justifyContent: 'flex-end',
        gap: 6,
        alignItems: 'center'
    },
    postLikesTxt: {
        color: '#5A5A5A',
    },
    addPost: {
        bottom: 0,
        right: 0,
        position: 'absolute',
        marginRight: 16,
        marginBottom: 92,
        display: 'flex'
    }
})

export default AllTab;