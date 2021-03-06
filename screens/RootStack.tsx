import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import MainTab from './MainTab';
import ArticleScreen from './ArticleScreen';
import RegistScreen from './RegistScreen';
import LoginScreen from './LoginScreen';
import MyArticlesScreen from './MyArticlesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegistScreen}
        options={{ title: '회원가입' }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: '로그인' }}
      />
      <Stack.Screen
        name="MyArticles"
        component={MyArticlesScreen}
        options={{ title: '내가 쓴 글' }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ title: '게시글' }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
