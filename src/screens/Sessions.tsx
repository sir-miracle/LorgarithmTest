import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import StyledRoot from '../components/organisms/StyledRoot'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../themes/colors'
import { Props } from '../utils/utility_functions/UtilityFunctions'
import ArrowIcon from '../assets/svgs/arrow_front.svg'
import { useSelector } from 'react-redux';


const Sessions: FC<Props> = ({ navigation }) => {
    const coaches = useSelector((state: any) => state.coachesList);


    const RenderCoaches = ({ item, onPress }: { item: any, onPress: (item: any) => {} }) => {
        return (
            <TouchableOpacity style={styles.coachesRapper} onPress={() => onPress(item)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%', paddingHorizontal: 5 }}>
                    <Image
                        source={{ uri: item?.image }}
                        style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                        resizeMode={'contain'}
                    />
                    <Text>{item?.name}</Text>
                </View>
                <ArrowIcon />
            </TouchableOpacity>
        )
    }
    return (
        <StyledRoot useScrollFlex enableScroll={false}>
            <CustomText style={styles.avail}>
                Available Coaches
            </CustomText>
            <View style={{ width: '100%', flex: 1, marginTop: 20 }}>
                <FlatList
                    data={coaches?.dummyCoaches}
                    renderItem={({ item }) => <RenderCoaches item={item} onPress={(item) => navigation.navigate('BookSessions', item)} />}
                />
            </View>
        </StyledRoot>
    )
}

export default Sessions

const styles = StyleSheet.create({
    coachesRapper: {
        width: '95%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: colors.GreyGoose,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        padding: 10
    },
    avail: {
        fontSize: 20
    }
})