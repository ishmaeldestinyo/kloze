import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import TweetCard from "@/components/TweetCard";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";

export default function HomeScreen() {

  const tabItem = [
    {
      name: "Tweets",
      descr: (
        <TweetCard title="Tweets"/>
      )
    },
    {
      name: "Tweets & Replies",
      descr: (
        <TweetCard title="Tweets & Replies"/>

      )
    },
    {
      name: "Media",
      descr: (
        <TweetCard title="Media"/>

      )
    },
    {
      name: "Likes",
      descr: (
        <TweetCard title="Likes"/>

      )
    },
  ];

  const [activeTab, setActiveTab] = React.useState(0);




  return (
    <SafeAreaView style={{ backgroundColor: "whitesmoke" }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons
            style={{
              elevation: 10,
              marginTop: 20,
            }}
            name="arrow-back-ios"
            size={16}
            color={"white"}
          />
        </TouchableOpacity>
        <Text style={styles.headerTextCenter}>Digital Goodies Team</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          backgroundColor: "inherit",
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/young-boy-avatar-illustration_1308-175646.jpg?t=st=1746195412~exp=1746199012~hmac=d0bfc9e53cd37514e7c51e8718478540d50455a79b49da7f12b550abafae2013&w=740",
          }}
          style={{
            width: 55,
            height: 55,
            position: "absolute",
            top: -20,
            left: 15,
            borderColor: "whitesmoke",
            borderWidth: 3,
            borderRadius: 50,
            marginRight: 8,
          }}
        />
        <View
          style={{
            marginTop: 36,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Pixsellz
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "darkgray",
            }}
          >
            @pixsellz
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: "#87ceeb",
              marginTop: 10,
              backgroundColor: "white",
              paddingVertical: 2,
              paddingHorizontal: 7,
              fontWeight: "600",
              borderWidth: 1.5,
              borderColor: "#87ceeb",
              borderRadius: 50,
            }}
          >
            Edit profile
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          paddingHorizontal: 10,
          color: "#888",
          marginVertical: 4,
          fontSize: 14,
        }}
      >
        Digital Goodies Team - web & mobile UI/UX development; Graphics;
        Illustrations
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            gap: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingHorizontal: 10,
          }}
        >
          <Ionicons
            name="link-outline"
            style={{
              transform: "rotate(120deg)",
            }}
          />
          <Text
            style={{
              color: "#87ceeb",
            }}
          >
            pixsellz.io
          </Text>
        </View>
        <View
          style={{
            gap: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          {/* <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
        }}>118</Text> */}
          <Ionicons
            name="calendar-outline"
            style={{
              color: "gray",
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            Joined September, 2018
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 4,
          marginLeft: 5,
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            gap: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            217
          </Text>

          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            Following
          </Text>
        </View>
        <View
          style={{
            gap: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            118
          </Text>

          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            Followers
          </Text>
        </View>
      </View>
        <View style={styles.tabContainer}>
          {/* Tabs here */}
          <View style={styles.tabRow}>
            {
              tabItem.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveTab(index)}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      color: activeTab === index ? "#87ceeb" : "black",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))
            }
          </View>


          {/* Tab Contents here */}
          <ScrollView style={styles.contentArea}>
        {tabItem[activeTab].descr}
      </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    width,
    paddingHorizontal: 20,
    backgroundColor: "#131313",
    paddingVertical: 20,
  },
  contentArea: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  tabContainer: {
      marginTop: 20,
  },
  headerTextCenter: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
