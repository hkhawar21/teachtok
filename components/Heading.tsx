import { Text as NativeText, TextProps } from "react-native";

interface HeadingProps extends TextProps {
  children: any;
}

const Heading = (props: HeadingProps): JSX.Element => {
  return (
    <NativeText
      {...props}
      style={[
        {
          fontFamily: "SFProRoundedSemiBold",
          color: "#fff",
          fontSize: 16,
        },
        props.style,
      ]}
    >
      {props.children}
    </NativeText>
  );
};

export default Heading;
