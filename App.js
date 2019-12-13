import React from 'react';
import Header from "./src/components/Header"
import { View } from "react-native";
import Post from "./src/components/Post";

class App extends React.Component {
  render() {
    const comments = [
      { nickname: "Joana Helena", comment: "Excelente Foto!" },
      { nickname: "Rafael Gustavo", comment: "Muito Ruim!, faço melhor..." }
    ]

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require("./assets/imgs/fence.jpg")}
          comments={comments} />
      </View>
    );
  }
};

export default App;
