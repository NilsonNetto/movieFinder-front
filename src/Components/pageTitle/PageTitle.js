import './PageTitle.scss';
import { FlexBox, Text, Title } from "@ui5/webcomponents-react";

export default function PageTitle() {
  return (
    <FlexBox
      className="title-wrapper"
    >
      <Title>
        Teste
      </Title>
      <Text>
        texto de teste da app
      </Text>
    </FlexBox>
  );
}