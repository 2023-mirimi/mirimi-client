import { StyleSheet, View, Text } from 'react-native';

const CheckTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>추후 업데이트 예정입니다</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
      color: 'rgba(90, 90, 90, 1)'
    }
});

export default CheckTab;