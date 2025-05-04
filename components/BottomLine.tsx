import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ visible, onClose }) => {
  const translateY = useSharedValue(SCREEN_HEIGHT);

  useEffect(() => {
    translateY.value = visible
    ? withSpring(SCREEN_HEIGHT * 0.81, { damping: 15 }) // show height from bottom
    : withSpring(SCREEN_HEIGHT);
  
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const menuItem = [
    {
      name: "Split Payment",
      icon: <MaterialIcons size={24} color={"#87ceeb"} name="splitscreen" />,
    },
    {
      name: "Camera",
      icon: <Ionicons size={24} color={"#87ceeb"} name="camera-outline" />,
    },
    {
      name: "Photo & Video Library",
      icon: <MaterialIcons size={24} color={"#87ceeb"} name="browse-gallery" />,
    },
    {
      name: "Document",
      icon: (
        <Ionicons size={24} color={"#87ceeb"} name="document-attach-outline" />
      ),
    },
    {
      name: "Location",
      icon: <Ionicons size={24} color={"#87ceeb"} name="location-outline" />,
    },
    {
      name: "Contact",
      icon: <Ionicons size={24} color={"#87ceeb"} name="person-outline" />,
    },
  ];

  return (
    <Animated.View style={[styles.sheetContainer, animatedStyle]}>
      <View style={styles.sheetContent}>
        {menuItem &&
          menuItem.length > 0 &&
          menuItem.map((menu, key) => (
            <TouchableOpacity key={key}>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "whitesmoke",
                  paddingVertical: 10,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 10,
                }}
              >
                {menu.icon}
                <Text style={{ fontWeight: 500 }}>{menu.name}</Text>
              </View>
            </TouchableOpacity>
          ))}

        <TouchableOpacity onPress={onClose}>
          <Text
            style={{
              fontWeight: 700,
              textAlign: "center",
              fontSize: 17,
              paddingHorizontal: 10,
              borderRadius: 20,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'whitesmoke',
              marginTop: 20,
              paddingVertical: 15,
              color: "#0085fb",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    position: "absolute",
    bottom: 0,
    height: SCREEN_HEIGHT * 0.49,
    left: 12,
    zIndex: 2,
    right: 12,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 10,
  },
  sheetContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  closeButton: {
    backgroundColor: "#87ceeb",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
});
