import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface CommentItemProps {
  id: number;
  message: string;
  username: string;
  publishedAt: string;
}

const CommentItem = ({ message, username, publishedAt }: CommentItemProps) => {
  const formattedDate = new Date(publishedAt).toDateString();
  return (
    <View style={sytles.block}>
      <View style={sytles.head}>
        <Text style={sytles.username}>{username}</Text>
        <Text style={sytles.date}>{formattedDate}</Text>
      </View>
      <Text style={sytles.message}>{message}</Text>
    </View>
  );
};

const sytles = StyleSheet.create({
  block: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontWeight: 'bold',
  },
  date: {
    color: '#546e7a',
    fontSize: 10,
    marginTop: 4,
  },
  message: {
    marginTop: 4,
  },
});

export default CommentItem;
