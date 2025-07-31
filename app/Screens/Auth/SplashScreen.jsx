import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        source={require('../../Assets/video/video-file.mp4')}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        muted={true}
      />
      <Text style={styles.appName}>DUBAI BOATING</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default SplashScreen;

// import React, { useEffect } from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SplashScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'HomeScreen' }],
//       });
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../Assets/logo.png')}
//         style={styles.logo}
//         resizeMode="contain"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // Full white background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 200,
//     height: 200,
//       transform: [{ rotate: '90deg' }],

//   },
// });

// export default SplashScreen;
