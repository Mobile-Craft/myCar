import React, { useEffect } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import GradientBackground from "@/components/GradientBackground";
import { ThemedText } from "@/components/ThemedText";
import { globalStyles } from "@/components/GlobalStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { GradientBorderView } from "@/components/GradientBorderView";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

export default function HomeScreen() {
  const gradientWidth = useSharedValue(0); // Starting width of 0

  useEffect(() => {
    gradientWidth.value = withTiming(1, { duration: 1000 }); // Animate to full width
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleX: gradientWidth.value }],
    };
  });

  return (
    <GradientBackground>
      <Image
        source={require("@/assets/images/menu.png")}
        style={styles.circleMenu}
      />
      <View style={styles.logoCotainer}>
        <Image
          source={require("@/assets/images/m3Logo.png")}
          style={styles.m3Logo}
        />
        <Image source={require("@/assets/images/bmwLogo.png")} />
      </View>
      <View style={styles.titleContainer}>
        <ThemedText
          type="title"
          lightColor="white"
          style={[styles.title, globalStyles.shadow1]}
        >
          Welcome back,
        </ThemedText>
        <ThemedText
          lightColor="white"
          style={[styles.subTitle, globalStyles.shadow1]}
        >
          Benjamin!
        </ThemedText>
        <ThemedText
          type="subtitle"
          lightColor="white"
          style={[styles.text, { paddingTop: 50 }]}
        >
          Do you want to continue Individual mode on your M5 Competition?
        </ThemedText>
      </View>
      <Animated.View style={[animatedStyle]}>
        <LinearGradient
          colors={["#ffffff3b", "#ffffff2c"]}
          style={[styles.line]}
        />
      </Animated.View>
      <View style={styles.containerButtom}>
        <GradientBorderView
          style={[
            styles.buttom,
            {
              backgroundColor: "#c4c4c45",
            },
          ]}
          gradientProps={{}}
        >
          <Pressable style={[styles.buttom, {}]}>
            <ThemedText
              type="subtitle"
              lightColor="white"
              style={[styles.textButtom]}
            >
              No, Thank!
            </ThemedText>
          </Pressable>
        </GradientBorderView>

        <GradientBorderView
          style={[
            styles.buttom,
            {
              backgroundColor: "#36000030",
            },
          ]}
          gradientProps={{}}
        >
          <Link href={"/hello"} asChild style={[]}>
            <Pressable style={[]}>
              <ThemedText
                type="subtitle"
                lightColor="white"
                style={[styles.textButtom]}
              >
                Continue
              </ThemedText>
            </Pressable>
          </Link>
        </GradientBorderView>
      </View>
      <ThemedText lightColor="white" style={[styles.copyR]}>
        By Elder Tavarez
      </ThemedText>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 36,
    backgroundColor: "blue",
  },
  circleMenu: {
    marginTop: 80,
    right: 30,
    position: "absolute",
  },
  logoCotainer: {
    alignSelf: "center",
    marginTop: 122,
    flexDirection: "row",
    alignItems: "center",
  },
  m3Logo: {
    top: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: "200",
    paddingTop: 80,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 30,
  },
  titleContainer: {
    marginHorizontal: 55,
    alignContent: "flex-start",
  },
  text: {
    fontWeight: "300",
    fontSize: 22,
  },
  line: {
    height: 2,
    marginTop: 70,
    borderRadius: 30,
    marginHorizontal: 21,
  },
  containerButtom: {
    marginTop: 58,
    paddingHorizontal: 35,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  buttom: {
    width: 145,
    height: 61,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#003D78",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtom: {
    fontWeight: "300",
    fontSize: 18,
  },
  copyR: {
    fontSize: 14,
    paddingTop: 28,
    alignSelf: "center",
  },
});
