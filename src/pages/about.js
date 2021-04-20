import React from "react";
import { styled } from "@linaria/react";
import Layout from "../components/layout";
import { colors } from "styles/theme";

const Container = styled.div`
  background: ${colors.primary200};
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>about page</Container>
    </Layout>
  );
};

export default IndexPage;
