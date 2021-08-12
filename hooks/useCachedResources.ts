import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { AppLoading } from 'expo';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/Fonts/SpaceMono-Regular.ttf'),
          'nunito-black': require('../assets/Fonts/Nunito-Black.ttf'),
          'nunito-bold': require('../assets/Fonts/Nunito-Bold.ttf'),
          'nunito-light': require('../assets/Fonts/Nunito-Light.ttf'),
          'nunito-regular': require('../assets/Fonts/Nunito-Regular.ttf'),
          'nunito-semiBold': require('../assets/Fonts/Nunito-SemiBold.ttf'),

        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
