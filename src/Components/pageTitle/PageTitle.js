import './PageTitle.scss';
import { FlexBox, FlexBoxDirection, FlexBoxJustifyContent, FlexBoxAlignItems, Text, Title } from "@ui5/webcomponents-react";

export default function PageTitle() {
  return (
    <FlexBox
      className="title-wrapper"
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.SpaceBetween}
      alignItems={FlexBoxAlignItems.Center}
    >
      <Title
        className='title'
      >
        MovieFinder
      </Title>
      <Text
        className='title-text'
      >
        Search for all movie information you need!
      </Text>
    </FlexBox>
  );
}