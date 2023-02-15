import React from "react";

import {
  Container,
  ImageIndexes,
  Imageindex,
  CarImagerapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <Imageindex active={false} />
        <Imageindex active={false} />
        <Imageindex active={true} />
        <Imageindex active={false} />
      </ImageIndexes>

      <CarImagerapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImagerapper>
    </Container>
  );
}
