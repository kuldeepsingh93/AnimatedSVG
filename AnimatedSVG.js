import React from "react";
import { View, TouchableOpacity, Text } from 'react-native'
import { AnimatedSVGPath } from 'react-native-svg-animations'

class AnimatedSVG extends React.Component {

  handleClick = () => {
    alert('button clicked')
  }

  render() {
    const d = "M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
    return (
      <View>
        <AnimatedSVGPath
          strokeColor={"red"}
          duration={1000}
          strokeWidth={10}
          height={400}
          width={400}
          scale={0.75}
          delay={0}
          d={d}
          loop={true}
          strokeDashArray={[42.76482137044271, 42.76482137044271]}
        />
        <TouchableOpacity onPress = {this.handleClick}>
          <Text> CLICK ME </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AnimatedSVG;
