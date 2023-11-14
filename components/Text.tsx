import { Text as NativeText, TextProps } from "react-native";

interface MyTextProps extends TextProps {
  children: any;
}

const Text = (props: MyTextProps): JSX.Element => {
  return (
    <NativeText
      {...props}
      style={[
        { fontFamily: "SFProRoundedRegular", color: "#fff" },
        props?.style,
      ]}
    >
      {props.children}
    </NativeText>
  );
};

export default Text;
