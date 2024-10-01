import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import colors from '../utils/colors';
import AppButton from '../components/AppButton';

const CustomDrawerContent = props => {
  const {navigation} = props;

  useEffect(() => {}, []);

  const clearStorage = () => {
    navigation.popToTop();
    navigation.navigate('AuthStack');
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* Profile Section */}
      <View
        style={{
          marginTop: -10,
          paddingHorizontal: 16,
          backgroundColor: colors.secondaryColor,
        }}>
        {/* Close Button */}
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
          style={styles.closeButton}>
          <Entypo name="cross" size={30} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.profileSection}>
          <Image
            style={{width: 55, height: 55, borderRadius: 12, marginRight: 15}}
            source={require('../assets/dummyImg.png')}
          />

          <View>
            <Text style={styles.profileText}>Faculty Name</Text>
            <Text style={styles.profileSubText}>faculty@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* Additional Drawer Items */}
      <DrawerItem
        label={() => (
          <View style={styles.drawerItemRow}>
            <View style={styles.drawerItem}>
              <Entypo name="home" style={styles.leftIcon} size={20} />

              <Text style={styles.labelText}>Home</Text>
            </View>
            <Entypo name="chevron-right" style={styles.rightIcon} size={16} />
          </View>
        )}
        onPress={() => props.navigation.navigate('Home')}
      />

      <DrawerItem
        label={() => (
          <View style={styles.drawerItemRow}>
            <View style={styles.drawerItem}>
              <FontAwesome6 name="compass" style={styles.leftIcon} size={20} />

              <Text style={styles.labelText}>Attendance</Text>
            </View>
            <Entypo name="chevron-right" style={styles.rightIcon} size={16} />
          </View>
        )}
        onPress={() => props.navigation.navigate('Attendance')}
      />

      <DrawerItem
        label={() => (
          <View style={styles.drawerItemRow}>
            <View style={styles.drawerItem}>
              <FontAwesome6 name="bookmark" style={styles.leftIcon} size={20} />
              <Text style={styles.labelText}>Competitions</Text>
            </View>

            <Entypo name="chevron-right" style={styles.rightIcon} size={16} />
          </View>
        )}
        onPress={() => props.navigation.navigate('Competitions')}
      />

      <DrawerItem
        label={() => (
          <View style={styles.drawerItemRow}>
            <View style={styles.drawerItem}>
              <FontAwesome6 name="star" style={styles.leftIcon} size={20} />
              <Text style={styles.labelText}>Performance</Text>
            </View>

            <Entypo name="chevron-right" style={styles.rightIcon} size={16} />
          </View>
        )}
        onPress={() => props.navigation.navigate('Performance')}
      />

      <DrawerItem
        label={() => (
          <View style={styles.drawerItemRow}>
            <View style={styles.drawerItem}>
              <FontAwesome6 name="book" style={styles.leftIcon} size={20} />
              <Text style={styles.labelText}>Reports</Text>
            </View>

            <Entypo name="chevron-right" style={styles.rightIcon} size={16} />
          </View>
        )}
        onPress={() => props.navigation.navigate('Settings')}
      />

      <AppButton
        title="Logout"
        onPress={() => clearStorage()}
        style={styles.logoutBtn}
      />
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileIcon: {
    marginRight: 20,
  },
  profileText: {
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  profileSubText: {
    color: colors.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },

  leftIcon: {
    color: colors.Grey,
    width: 25,
  },
  rightIcon: {
    color: colors.Grey,
  },

  drawerItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    color: colors.Grey,
    fontSize: 14,
    marginLeft: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutBtn: {
    width: '85%',
    marginTop: 50,
  },
});

export default CustomDrawerContent;
