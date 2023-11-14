import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarLabelStyle: {
          color: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" color={focused ? "#fff" : "#aaa"} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="compass" color={focused ? "#fff" : "#aaa"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        options={{
          title: "Actvity",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="clock-o" color={focused ? "#fff" : "#aaa"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="bookmark" color={focused ? "#fff" : "#aaa"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="user-circle" color={focused ? "#fff" : "#aaa"} />
          ),
        }}
      />
    </Tabs>
  );
}
