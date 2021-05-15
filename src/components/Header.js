import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';
import { logoutUser } from '../actions/user'
import Popover from '@material-ui/core/Popover';
import {Icon, Button} from 'react-native-elements'
import { View } from 'react-native'

const UserIconComponent = ({logoutUser}) => {
    const [popoverOpen, setPopoverOpen] = useState(false)
    return (
        <>
            <Icon name='user-circle-o' type='font-awesome' color='#fff' onPress={() => setPopoverOpen(true)}/>
            <Popover
                open={popoverOpen}
                onClose={() => setPopoverOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorPosition={{ top: 200, left: 200 }}
            >
                <View>
                    <Button type='clear' title='Logout' onPress={() => logoutUser()}/>
                </View>
            </Popover>
        </>
    )
}

function CustomHeader({
    navigation,
    isLoggedIn,
    logoutUser
}){
    return (
        <Header 
            containerStyle={{backgroundColor:'darkslategrey',width: '100%', borderBottomWidth: 5, marginBottom:'10px' }}
            leftComponent={{ icon: 'menu', color: '#fff', underlayColor: '#3488C0', onPress: () => navigation.dispatch(DrawerActions.openDrawer())}}
            centerComponent={{ 
                text: 'Reser&vas',
                style: { color: '#fff', fontWeight: 'bold', fontSize: 20},
                onPress: () => isLoggedIn && navigation.navigate('Home')
            }}
            rightComponent={isLoggedIn && <UserIconComponent logoutUser={logoutUser}/>}
        />
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn 
})

const mapDispatchToProps = {
    logoutUser
}

const CustomHeaderConnected = connect(mapStateToProps, mapDispatchToProps)(CustomHeader)

export default CustomHeaderConnected

export { CustomHeader }