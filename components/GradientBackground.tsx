import { LinearGradient } from 'expo-linear-gradient';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';

interface Props {
  children: any;
  style?: StyleProp<ViewStyle>;
}
function GradientBackground({children, style}:Props) {
  return (
    <LinearGradient
      colors={[ "#0093FF", "#003D78", "#E22718"]}
      start={{x: 0, y: 0.08}}
      end={{x: 0.9, y: 0.98}}
      style={[style,{flex: 1}]}>
      {children}
    </LinearGradient>
  );
}

export default GradientBackground;
