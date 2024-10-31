import React, { ReactElement, useState } from "react";
import { Data } from "../api/message";
import SecondaryLayout from "@/components/layout/secondaryLayout";
import Layout from "@/components/layout/layout";
import { Form, UserMessage } from "@/components";
import { FormProps } from "antd";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import Script from "next/script";
import { Loader } from "@/components";

type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactUsPage",
  description: "Contact us",
  potentialAction: [
    {
      "@type": "ContactPoint",
      telephone: "+6-666-666-6666",
      contactType: "customer service",
      url: "euphonious-kashata-07bf48.netlify.app",
      availableLanguage: ["en"],
    },
    {
      "@type": "EmailMessage",
      toRecipient: "info@cool-company.com",
      body: "Please provide your name, email, and message in the form below.",
    },
  ],
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

export const Error = styled.div`
  font-weight: 600;
  text-align: center;
  color: red;
`;

export default function ContactUsPage() {
  const [data, setData] = useState<Data | null>(null);
  const [status, setStatus] = useState("");

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      setStatus("loading");
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setData(data);
    } catch {
      setStatus("error");
    } finally {
      setStatus("finished");
    }
  };

  return (
    <>
      <NextSeo
        title="Some cool title for contact us page"
        description="Some cool description for contact us page."
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {status === "loading" && <Loader />}
      {status === "error" && <Error>Something went wrong</Error>}

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
