import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Flex,
  Stack,
  Button,
  List,
  Text,
  Paper,
  SegmentedControl,
  Center,
  Badge,
  Tooltip,
  Anchor,
  type PaperProps,
  Box,
} from "@mantine/core";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowRightLong, FaCheck, FaXmark } from "react-icons/fa6";
import { VscLinkExternal } from "react-icons/vsc";
import Layout from "src/layout/Layout";
import { gaEvent } from "src/lib/utils/gaEvent";

export const PRICING = {
  MONTHLY: 6,
  ANNUAL: 5,
  LTD: 120,
  getAnnualSave: () => Math.round(((PRICING.MONTHLY - PRICING.ANNUAL) / PRICING.MONTHLY) * 100),
};

export const purchaseLinks = {
  monthly:
    "https://jsoncrack.lemonsqueezy.com/checkout/buy/ce30521f-c7cc-44f3-9435-995d3260ba22?enabled=67805",
  annual:
    "https://jsoncrack.lemonsqueezy.com/checkout/buy/577928ea-fb09-4076-9307-3e5931b35ad0?enabled=82417",
  ltd: "https://jsoncrack.lemonsqueezy.com/buy/b4d2515e-1ed2-4f32-a6ad-615f208a89eb?enabled=384328",
};

const StyledPaper = styled(Paper)<PaperProps & any>`
  padding: 1.5em;
  width: 350px;
  border-radius: 8px;
  border: 2px solid #e2e2e2;
  background: white;
`;

export const PricingCards = () => {
  const [isMonthly, setIsMonthly] = React.useState(true);

  return (
    <Stack gap="0" align="center" maw="730px" mx="auto">
      <Center my="lg">
        <SegmentedControl
          bg="gray.3"
          color="white"
          value={isMonthly ? "Monthly" : "Annual"}
          onChange={v => setIsMonthly(v === "Monthly")}
          size="sm"
          data={[
            {
              label: "Pay monthly",
              value: "Monthly",
            },
            {
              label: `Pay yearly (save ${PRICING.getAnnualSave()}%)`,
              value: "Annual",
            },
          ]}
          radius="xl"
          styles={{ label: { color: "black" } }}
        />
      </Center>
      <Flex
        gap="sm"
        wrap="wrap"
        justify="space-between"
        w="fit-content"
        maw="100%"
        p={{
          xs: 4,
          md: 6,
        }}
        mx="auto"
      >
        <StyledPaper>
          <Flex justify="space-between">
            <Stack gap="0" w="100%">
              <Flex align="center">
                <Text fw={500} size="xl" c="black">
                  Premium
                </Text>
                {!isMonthly && (
                  <Badge
                    fw={600}
                    size="md"
                    variant="light"
                    c="brightBlue"
                    radius="sm"
                    color="brightBlue"
                    ml="sm"
                  >
                    SAVE {PRICING.getAnnualSave()}%
                  </Badge>
                )}
              </Flex>

              <Flex gap="xs" align="baseline">
                <Text fz={38} fw={600} c="black">
                  ${isMonthly ? PRICING.MONTHLY : PRICING.ANNUAL}
                </Text>
                <Text fz="md" c="gray.6">
                  / mo
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text fz="xs" c="gray.7">
                  billed {isMonthly ? "monthly" : "annually"}
                </Text>
                <Anchor component={Link} href="/premium" ml="sm" fz="xs" td="underline" c="dimmed">
                  see all features
                </Anchor>
              </Flex>
            </Stack>
          </Flex>
          <Button
            component="a"
            color="brightBlue"
            onClick={() => gaEvent("Pricing", "click upgrade premium")}
            href={isMonthly ? purchaseLinks.monthly : purchaseLinks.annual}
            target="_blank"
            size="lg"
            radius="md"
            fullWidth
            my="md"
            rightSection={<FaArrowRightLong />}
          >
            Get Started
          </Button>
          <Text mt="xs" fz="xs" c="dimmed">
            Full-featured version of the editor with unlimited access.
          </Text>
          <Flex direction="column" justify="space-between">
            <List
              spacing="sm"
              size="sm"
              mt="xs"
              c="black"
              center
              icon={<FaCheck size="18" color="#1866db" />}
            >
              <List.Item>
                <Tooltip
                  color="blue"
                  label="Visualize up to 4 MB of data"
                  maw={350}
                  multiline
                  withArrow
                >
                  <Text
                    c="black"
                    fw={500}
                    fz="sm"
                    style={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Larger data support
                  </Text>
                </Tooltip>
              </List.Item>
              <List.Item>
                <Tooltip
                  color="blue"
                  label="Load data 5x faster and 50% smaller graph size."
                  maw={350}
                  multiline
                  withArrow
                >
                  <Text
                    c="black"
                    fw={500}
                    fz="sm"
                    style={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Compact and Fast Visualization
                  </Text>
                </Tooltip>
              </List.Item>
              <List.Item>
                <Text c="black" fw={500} fz="sm">
                  Compare data
                </Text>
              </List.Item>
              <List.Item>
                <Text c="black" fw={500} fz="sm">
                  Edit data on graph
                </Text>
              </List.Item>
              <List.Item>
                <Text c="black" fw={500} fz="sm">
                  Built-in tabs for multiple documents
                </Text>
              </List.Item>
              <List.Item>
                <Text c="black" fw={500} fz="sm">
                  Store 200 documents
                </Text>
              </List.Item>
              <List.Item>
                <Text c="black" fw={500} fz="sm">
                  AI-powered data filter
                </Text>
              </List.Item>
              <List.Item>
                <Text c="black" fw={500} fz="sm">
                  Customize graph colors
                </Text>
              </List.Item>
            </List>
          </Flex>
        </StyledPaper>
        <StyledPaper>
          <Flex justify="space-between">
            <Stack gap="0">
              <Text fw={500} size="xl" c="black">
                Free
              </Text>
              <Text fz={38} fw={600} c="black">
                $0
              </Text>
              <Text fz="xs" c="gray.7">
                billed {isMonthly ? "monthly" : "annually"}
              </Text>
            </Stack>
          </Flex>
          <Button
            component={Link}
            href="/editor"
            prefetch={false}
            size="lg"
            radius="md"
            variant="outline"
            color="dark"
            fullWidth
            my="md"
            rightSection={<FaArrowRightLong />}
          >
            Start Free
          </Button>
          <Text mt="xs" fz="xs" c="dimmed">
            Basic version of the editor with limited features, open-source.
          </Text>
          <Flex direction="column" justify="space-between">
            <List
              spacing="sm"
              size="sm"
              mt="lg"
              c="black"
              center
              icon={<FaCheck size="18" color="#1866db" />}
            >
              <List.Item>
                <Tooltip
                  color="blue"
                  label="Visualize up to ~300 KB of data"
                  maw={350}
                  multiline
                  withArrow
                >
                  <Text
                    c="black"
                    fw={500}
                    fz="sm"
                    style={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Basic data size support
                  </Text>
                </Tooltip>
              </List.Item>
              <List.Item>
                <Tooltip
                  color="blue"
                  label={
                    <Flex align="center" gap="xs">
                      Open source and free to use
                      <VscLinkExternal />
                    </Flex>
                  }
                  maw={350}
                  multiline
                  withArrow
                >
                  <Anchor
                    href="https://github.com/AykutSarac/jsoncrack.com"
                    target="_blank"
                    c="black"
                    fw={500}
                    fz="sm"
                    style={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Open Source
                  </Anchor>
                </Tooltip>
              </List.Item>
              <List.Item>
                <Text c="black" fw={500} fz="sm">
                  Store 25 documents
                </Text>
              </List.Item>
              <List.Item icon={<FaXmark color="gray" size={20} />}>
                <Text c="gray.6" fw={500} fz="sm">
                  Edit data on graph
                </Text>
              </List.Item>
              <List.Item icon={<FaXmark color="gray" size={20} />}>
                <Text c="gray.6" fw={500} fz="sm">
                  AI-powered data filter
                </Text>
              </List.Item>
              <List.Item icon={<FaXmark color="gray" size={20} />}>
                <Text c="gray.6" fw={500} fz="sm">
                  Compact visualization
                </Text>
              </List.Item>
              <List.Item icon={<FaXmark color="gray" size={20} />}>
                <Text c="gray.6" fw={500} fz="sm">
                  Compare data
                </Text>
              </List.Item>
              <List.Item icon={<FaXmark color="gray" size={20} />}>
                <Text c="gray.6" fw={500} fz="sm">
                  Customize graph colors
                </Text>
              </List.Item>
            </List>
          </Flex>
        </StyledPaper>
        <Box w="100%">
          <StyledPaper withBorder p="xs" w="100%" visibleFrom="sm">
            <Flex gap="xs" align="end" justify="space-between">
              <Stack gap="5">
                <Text c="dark" fz="md" fw={500}>
                  Buy once,
                  <Text ml={4} component="span" inherit c="brightBlue">
                    use forever
                  </Text>
                  !
                </Text>
                <Text c="gray.8" fz="sm" maw={400}>
                  Lifetime access. One-time payment. Free updates.
                </Text>
              </Stack>
              <Button
                component="a"
                href={purchaseLinks.ltd}
                target="_blank"
                fw={500}
                fz="sm"
                size="md"
                color="indigo"
                rightSection={<FaArrowRightLong />}
              >
                Get Lifetime Access for ${PRICING.LTD}
              </Button>
            </Flex>
          </StyledPaper>
        </Box>
      </Flex>
    </Stack>
  );
};

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Pricing - JSON Crack</title>
        <link rel="canonical" href="https://jsoncrack.com/pricing" />
      </Head>
      <Layout>
        <PricingCards />
        <Flex pt="sm" c="dimmed" justify="center" align="center" gap={4}>
          <AiOutlineInfoCircle />
          <Text size="sm">
            Payment email must be matching with the account registered to the JSON Crack.
          </Text>
        </Flex>
      </Layout>
    </>
  );
};

export default Pricing;
