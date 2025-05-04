import BottomSheet from "@/components/BottomLine";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // You can change the icon set
import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Message() {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const userMessages = [
    {
      text: "Good morning",
      sentAt: "10:10",
      isReciever: true,
    },
    {
      text: "I have completed the work",
      sentAt: "10:15",
      isReciever: true,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: showBottomSheet ? 1 : 0.95 }}>
        {/* Header NavBar */}
        <View style={styles.navbar}>
          {/* GoBack icon */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#87ceeb" />
          </TouchableOpacity>

          {/* Center block: profile pic + text */}
          <View style={styles.centerBlock}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/young-boy-avatar-illustration_1308-175646.jpg?t=st=1746195412~exp=1746199012~hmac=d0bfc9e53cd37514e7c51e8718478540d50455a79b49da7f12b550abafae2013&w=740",
              }}
              style={styles.profilePic}
            />
            <View style={styles.textBlock}>
              <Text style={styles.fullName}>Destiny Onwe</Text>
              <Text style={styles.groupName}>You, Kaycee, Jo Josh, Mikky</Text>
            </View>
          </View>

          {/* Right icons */}
          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconSpacing}>
              <Ionicons name="videocam-outline" size={24} color="#87ceeb" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="call" size={24} color="#87ceeb" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {/* Main Content */}
          <View>
            <Text style={contentStyles.offsetText}>Fri, Jul 26</Text>
          </View>

          <View>
            {userMessages &&
              userMessages.length > 0 &&
              userMessages.map((userMsg, key) => (
                <View key={key} style={contentStyles.sendCardStyle}>
                  <Text>{userMsg.text}</Text>
                  <Text style={contentStyles.smallMsg}>{userMsg.sentAt}</Text>
                  {userMsg.isReciever && (
                    <Ionicons
                      size={11}
                      color={"#2299fb"}
                      style={{ marginTop: 4, fontWeight: "bold" }}
                      name="checkmark-done"
                    />
                  )}
                </View>
              ))}
          </View>

          {/* Popup Modal */}
          {showBottomSheet && (
            <>
              <TouchableOpacity
                style={styles.overlay}
                onPress={() => setShowBottomSheet(false)}
                activeOpacity={1}
              />
              <BottomSheet
                visible={showBottomSheet}
                onClose={() => setShowBottomSheet(false)}
              />
            </>
          )}
        </ScrollView>
      </View>
      {/* Bottom chat nav */}
      {!showBottomSheet && (
        <View
          style={{
            flex: 0.05,
            width: "100%",
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => setShowBottomSheet(!showBottomSheet)}
          >
            <MaterialIcons name="add" size={20} color="#87ceeb" />
          </TouchableOpacity>
          <TextInput style={contentStyles.textInputStyle} />
          <MaterialIcons
            style={contentStyles.iconStyle}
            name="file-open"
            size={16}
            color={"#87ceeb"}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              marginRight: 2,
            }}
          >
            <Ionicons name="camera-outline" size={18} color="#87ceeb" />
            <Ionicons name="mic-outline" size={18} color="#87ceeb" />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Message;

const bottomStyle = StyleSheet.create({
  navRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "fixed",
    justifyContent: "space-between",
  },
});
const contentStyles = StyleSheet.create({
  iconStyle: {
    position: "absolute",
    right: 84,
    top: 24,
    transform: [{ translateY: -10 }], // center vertically (half of icon size)
  },
  textInputStyle: {
    backgroundColor: "whitesmoke",
    borderRadius: 50,
    position: "relative",
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 0.5,
    width: "70%",
    height: 26,
    paddingHorizontal: 10,
    paddingVertical: 2, // Optional: for better spacing
  },

  smallMsg: {
    fontSize: 8,
    marginTop: 5,
  },
  offsetText: {
    backgroundColor: "lightgray",
    margin: "auto",
    padding: 5,
    fontWeight: 600,
    color: "gray",
    borderRadius: 4,
    fontSize: 10,
    marginTop: 10,
  },
  sendCardStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 2,
    color: "gray",
    padding: 5,
    width: "auto",
    gap: 10,
    marginLeft: "auto",
    borderRadius: 8,
    backgroundColor: "#DCF7C5",
    marginRight: 20,
  },
});

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: "black",
    opacity: 0.4,
    zIndex: 1,
  },
  navbar: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingTop: 50, // Adjust if using SafeAreaView
    paddingHorizontal: 16,
    paddingBottom: 7,
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  textBlock: {
    flexShrink: 1,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#131313",
  },
  groupName: {
    fontSize: 12,
    color: "#888",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginRight: 18,
  },
});
