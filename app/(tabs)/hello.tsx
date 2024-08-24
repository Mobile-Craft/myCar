import { StyleSheet, Image, View, Pressable } from "react-native";
import GradientBackground from "@/components/GradientBackground";
import React, { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { globalStyles } from "@/components/GlobalStyle";
import GradientButton from "@/components/GradientButton";
import { Link } from "expo-router";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function HelloScreen() {
  const carPosition = useSharedValue(500); 
  const buttonOpacity = useSharedValue(0);

  useEffect(() => {
    // Animación del coche
    carPosition.value = withTiming(0, { duration: 1000 }, (isFinished) => {
      if (isFinished) {
        // Cuando la animación del coche termina, comienza la animación del botón
        buttonOpacity.value = withTiming(1, { duration: 500 });
      }
    });
  }, []);

  const animatedCarStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: carPosition.value }],
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });
  return (
    <GradientBackground>
      <Link href={"/"} asChild>
        <Pressable>
          <Image
            source={require("@/assets/images/circleMenu.png")}
            style={styles.circleMenu}
          />
        </Pressable>
      </Link>
      <Image
        source={require("@/assets/images/profileCircle.png")}
        style={styles.ProfileCircle}
      />
      <View style={styles.container}>
        <ThemedText type="subtitle" lightColor="white">
          Hello
        </ThemedText>
        <ThemedText
          type="title"
          lightColor="white"
          style={[globalStyles.shadow2, styles.name]}
        >
          Benjamin
        </ThemedText>
        <Link href={"/details"} asChild>
          <Pressable>
            <Animated.Image
              source={require("@/assets/images/lock.png")}
              style={[styles.lock, animatedButtonStyle]}
            />
          </Pressable>
        </Link>
        <ThemedText lightColor="white" style={[globalStyles.shadow2]}>
          Tap to unlock your car
        </ThemedText>
      </View>
      <Animated.Image
        source={require("@/assets/images/completeCar.png")}
        style={[styles.footerCar, animatedCarStyle]}
      />
    </GradientBackground>
  );
}
const styles = StyleSheet.create({
  circleMenu: {
    top: 60,
    left: 30,
  },
  container: {
    alignItems: "center",
    marginTop: 140,
  },
  name:{
    color:'#ffffff99',
    letterSpacing: 2,
    fontSize:40
  },
  footerCar: {
    bottom: -10,
    alignSelf: "center",
  },
  footerCar2: {
    bottom: -20,
  },
  ProfileCircle: {
    top: 60,
    right: 30,
    position: "absolute",
  },
  lock: {
    marginTop: 26,
    marginBottom:12
  },
});
