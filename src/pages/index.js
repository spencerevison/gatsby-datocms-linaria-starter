import React from "react";
import { styled } from "@linaria/react";
import Layout from "../components/layout";

const Container = styled.div`
  background: var(--color-primary-500);
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>home page</Container>
    </Layout>
  );
};

export default IndexPage;
