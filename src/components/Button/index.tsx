import React from "react";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest} color={color ? color : theme.colors.main}>
      <Title>{title}</Title>
    </Container>
  );
}
