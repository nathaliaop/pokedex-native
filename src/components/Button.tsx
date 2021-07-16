import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors, Sizing } from "../styles";
import { BaseButton, BaseButtonProps } from "react-native-gesture-handler";

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <BaseButton style={styles.container} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={require("../../assets/illustrations/pokeball.png")} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {children}
      </Text>
    </BaseButton>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: Sizing.x60,
      padding: Sizing.x20,
      marginVertical: Sizing.x40,
      backgroundColor: Colors.darkpink,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
  },
  iconWrapper: {
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderColor: Colors.wine,
  },
  icon: {
      width: 30,
      height: 30,
  },
  title: {
      flex: 1,
      color: 'green',
      fontSize: 15,
      textAlign: 'center',
  },
})

'#fd5862'