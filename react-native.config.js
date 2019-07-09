module.exports = {
  dependencies: {
    'react-native-firebase': {
      platforms: {
        ios: { podspecPath: path.join(__dirname, 'ios', 'RNFirebase.podspec') },
        android: {
          /*"sourceDir": "./node_modules/react-native-firebase/android",
          "folder": "./node_modules/react-native-firebase",*/
          "packageImportPath": "import io.invertase.firebase.RNFirebasePackage;",
          "packageInstance": "new RNFirebasePackage()"
        }
      }
    }
  }
};
