import React, { ReactElement, useState } from "react";
import { Data } from "../api/message";
import SecondaryLayout from "@/components/layout/secondaryLayout";
import Layout from "@/components/layout/layout";
import Head from "next/head";
import { Form, UserMessage } from "@/components";
import { FormProps } from "antd";
import styled from "styled-components";

type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h2`
  font-weight: 600;
  text-align: center;
  color: var(--dark);
`;

export default function ContactUsPage() {
  const [data, setData] = useState<Data | null>(null);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    setData(data);
  };

  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Why you should contact us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        {data?.response ? (
          <UserMessage message={data?.response} />
        ) : (
          <WrapperInner>
            <Title>Only CTA on the page </Title>
            <Form onFinish={onFinish} />
          </WrapperInner>
        )}
      </Wrapper>
    </>
  );
}

ContactUsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SecondaryLayout>
      <Layout>{page}</Layout>
    </SecondaryLayout>
  );
};
