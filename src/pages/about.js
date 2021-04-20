import React from "react";
import { styled } from "@linaria/react";
import Layout from "../components/layout";

const Container = styled.div`
  background: var(--color-secondary-500);
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>about page</Container>
    </Layout>
  );
};

export default IndexPage;
