import React from 'react';
import { View, Text } from 'react-native';
import { connect, useSelector } from 'react-redux'

const userState = state => state.user

export default function UserInfoScreen() {
  const user = useSelector(userState)
  return (
    <View>
      {user ? (
        <>
          <Text>Nome: { user.name }</Text>
        </>
      ) : (
        <Text>Nenhum usuário encontrado</Text>
      )}
    </View>
  );
}