import React from "react";
import { ButtonContainer } from "./styles";
import { StyledText } from "../../texts/styles";
import { white } from "../../../theme/colors";

const CloseButton = (props) => {
  return (
    <ButtonContainer onPress={() => props.onPress()}>
      <StyledText fontSize={20} fontColor={white} fontWeight="bold">
        x
      </StyledText>
    </ButtonContainer>
  );
};

export default CloseButton;
