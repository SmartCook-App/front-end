import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Add any other required headers here
const requiredHeaders = ['access-token', 'client', 'uid', 'expiry'];

interface Headers {
  [key: string]: string;
}

const includedHeaders = (header: string) => requiredHeaders.includes(header);

export const setHeaders = async (headers: Headers): Promise<void> => {
  const headersArray = Object.keys(headers)
    .filter(includedHeaders)
    .map((key) => [key, headers[key]]);
  try {
    await AsyncStorage.multiSet(headersArray);
  } catch (error) {
    await clearAsyncStorage();
    // Notify error to user or try again
  }
};

export const getHeaders = async (
  desiredHeaders: string[] = requiredHeaders
): Promise<any> => {
  let headers: any[][] = [];
  const apiHeaders: any = {
    'content-type': 'application/json',
    accept: 'application/json',
  };
  try {
    headers = await AsyncStorage.multiGet(desiredHeaders);
  } catch (error) {
    headers = [];
  } finally {
    headers.forEach(([key, value]: string[]) => {
      apiHeaders[key] = value;
    });
  }
  return apiHeaders;
};

// To delete the AsyncStorage depending on OS
export const clearAsyncStorage = async (): Promise<void> => {
  const asyncStorageKeys = await AsyncStorage.getAllKeys();
  try {
    if (asyncStorageKeys.length > 0) {
      if (Platform.OS === 'android') {
        await AsyncStorage.clear();
      }
      if (Platform.OS === 'ios') {
        await AsyncStorage.multiRemove(asyncStorageKeys);
      }
    }
  } catch (error) {
    throw error;
  }
};
