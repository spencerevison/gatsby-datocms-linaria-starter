import React from "react";
import { styled } from "@linaria/react";
import Layout from "../components/layout";

const Container = styled.div`
  background: blue;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>about page</Container>
    </Layout>
  );
};

export default IndexPage;
