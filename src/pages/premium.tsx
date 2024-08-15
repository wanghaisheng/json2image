import React from "react";
import Head from "next/head";
import {
  Container,
  Box,
  Title,
  Button,
  Image,
  Text,
  SimpleGrid,
  Paper,
  ThemeIcon,
  Flex,
  Badge,
  Group,
  Radio,
  Stack,
} from "@mantine/core";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrMultiple } from "react-icons/gr";
import { IoSparkles } from "react-icons/io5";
import {
  MdChevronRight,
  MdCompare,
  MdOutlinePhotoSizeSelectSmall,
  MdOutlineTimer,
  MdPalette,
  MdRocketLaunch,
  MdSpeed,
} from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { PremiumPreview } from "src/containers/Landing/PremiumPreview";
import Layout from "src/layout/Layout";
import { gaEvent } from "src/lib/utils/gaEvent";
import { PRICING, purchaseLinks } from "./pricing";

const StyledRadioCard = styled(Radio.Card)`
  border-width: 2px;
  border-color: #efefef;
  min-width: 450px;
  transition: 0.2s;
  background: white;

  &[data-checked] {
    border-color: #120f43;
  }

  &:hover:not([data-checked]) {
    border-color: #b9b9b9;
    background: #f9f9f9;
  }

  @media only screen and (max-width: 600px) {
    min-width: unset;
    max-width: 100%;
  }
`;

const StyledFeatureCard = styled(Paper)<any>`
  background: rgba(255, 170, 234, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.11);
  transition: 0.2s;

  &:hover {
    background: rgba(255, 170, 234, 0.15);
  }
`;

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: FeatureItem[] = [
  {
    title: "Larger Data",
    description: "From 300KB to ~4MB upgraded data size.",
    icon: (
      <Text fz="sm" fw="500">
        4 MB
      </Text>
    ),
    color: "blue.3",
  },
  {
    title: "Compact Design",
    description:
      "50% less graph size. Get rid of the redundant data and nodes, focus on what's important.",
    icon: <MdOutlinePhotoSizeSelectSmall size={30} />,
    color: "violet.1",
  },
  {
    title: "Faster",
    description:
      "Load data faster. Navigate faster. Search faster. Everything is faster than ever.",
    icon: <MdSpeed size={30} />,
    color: "green.3",
  },
  {
    title: "Compare",
    description: "Compare two data, highlight the differences directly on the graphs.",
    icon: <MdCompare size={30} />,
    color: "red.3",
  },
  {
    title: "Customize",
    description: "Customize the graph's colors to align with your brand or personal preferences.",
    icon: <MdPalette size={30} />,
    color: "yellow.2",
  },
  {
    title: "Edit Directly",
    description:
      "Modify your data directly on the graph. No more switching between the editor and the graph.",
    icon: <IoSparkles size={22} />,
    color: "violet.3",
  },
  {
    title: "Tabs",
    description:
      "Open multiple tabs, navigate between them easily. Save up to 200 documents to the cloud.",
    icon: <GrMultiple size={22} />,
    color: "grape.2",
  },
  {
    title: "AI-Powered",
    description: "Ask it to translate your fields, filter out by age or name includes, and more.",
    icon: <RiRobot2Line size={22} />,
    color: "gray.1",
  },
];

const Premium = () => {
  const [plan, setPlan] = React.useState("monthly");

  const getUpgradeLink = () => {
    const link = new URL(purchaseLinks[plan]);

    gaEvent("Premium Page", "click select", plan);
    return link.toString();
  };

  return (
    <>
      <Head>
        <title>Premium - JSON Crack</title>
        <link rel="canonical" href="https://jsoncrack.com/premium" />
        <meta
          name="description"
          content="Rebuilt from the ground up — now faster, more powerful, and more visually stunning."
        />
        <meta
          property="og:description"
          content="Rebuilt from the ground up — now faster, more powerful, and more visually stunning."
        />
        <meta
          name="twitter:description"
          content="Rebuilt from the ground up — now faster, more powerful, and more visually stunning."
        />
      </Head>
      <Layout>
        <Container
          pos="relative"
          pt={100}
          pb={220}
          fluid
          style={{
            background:
              "linear-gradient(15deg, #120f43, #0d0e3e, #0b0f39, #0a1034, #08102f, #071029, #051024, #040f1e)",
          }}
        >
          <Flex px="xl" justify="center" gap={60}>
            <Box maw={600}>
              <Title
                order={1}
                c="white"
                fz={{
                  base: 38,
                  xs: 40,
                }}
              >
                Premium
              </Title>
              <Text
                c="gray.3"
                mt={32}
                fz={{
                  base: 16,
                  xs: 20,
                }}
              >
                Faster, more powerful, and more visually stunning.
              </Text>
              <Button
                component="a"
                href="#pricing"
                mt="lg"
                variant="white"
                color="gray"
                radius="md"
                size="lg"
                rightSection={<MdChevronRight size={30} />}
              >
                Upgrade now
              </Button>
              <Image
                pos="absolute"
                bottom={-1}
                left={0}
                src="./assets/premium-divider.svg"
                width="100%"
                alt="divider"
                style={{
                  transform: "scaleY(-1) scaleX(-1)",
                }}
              />
            </Box>
            <Image
              src="./assets/logo.svg"
              alt="hero"
              w="300"
              h="200"
              opacity={0.02}
              visibleFrom="sm"
            />
          </Flex>
        </Container>
        <PremiumPreview />
        <Container
          component="section"
          id="features"
          fluid
          bg="radial-gradient(58.11% 44.54% at 51.59% -9.61%, rgb(180, 176, 254) 0%, rgb(54, 50, 133) 22.92%, rgb(17, 13, 91) 42.71%, rgb(5, 3, 39) 88.54%)"
          my={120}
          py={40}
        >
          <Container size="xl">
            <Title
              fz={{
                base: 28,
                xs: 36,
              }}
              order={2}
              c="white"
            >
              Built for everyone.
            </Title>
            <Text c="gray.3" fz="xl" mb={40}>
              Zero technical knowledge required.
            </Text>
            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                md: 4,
              }}
              spacing="xl"
            >
              {features.map((feature, index) => (
                <StyledFeatureCard p="lg" radius="md" key={index}>
                  <Flex gap="sm" align="center" justify="center" direction="column">
                    <ThemeIcon radius="xl" size="xl" variant="light" color={feature.color}>
                      {feature.icon}
                    </ThemeIcon>
                    <Title ta="center" c="white" order={3}>
                      {feature.title}
                    </Title>
                    <Text c="gray.3">{feature.description}</Text>
                  </Flex>
                </StyledFeatureCard>
              ))}
            </SimpleGrid>
          </Container>
        </Container>
        <Container pt="xl" component="section" id="pricing" size="xl">
          <Title
            maw={800}
            fw={500}
            mx="auto"
            ta="center"
            c="#120F43"
            fz={{
              base: 28,
              xs: 40,
            }}
            order={2}
          >
            Keep your expectations high.
          </Title>
          <Radio.Group maw={600} mx="auto" mt="xl" value={plan} onChange={setPlan}>
            <Stack>
              <StyledRadioCard value="monthly" radius="lg" px="xl" py="md">
                <Group align="center" justify="space-between">
                  <Flex align="center" gap="xs">
                    <Text fz="xl" c="gray.7" fw={600}>
                      Monthly
                    </Text>
                  </Flex>
                  <Flex fw={500} align="baseline" fz="sm" c="gray.5">
                    <Text fw={600} fz="xl" c="gray.7">
                      ${PRICING.MONTHLY}
                    </Text>
                    /month
                  </Flex>
                </Group>
              </StyledRadioCard>
              <StyledRadioCard value="annual" radius="lg" px="xl" py="md">
                <Group align="center" justify="space-between">
                  <Flex align="center" gap="xs">
                    <Text fz="xl" c="gray.7" fw={600}>
                      Yearly
                    </Text>
                  </Flex>
                  <Flex fw={500} align="baseline" fz="sm" c="gray.5">
                    <Text fw={600} fz="xl" c="gray.7">
                      ${PRICING.ANNUAL * 12}
                    </Text>
                    /year
                  </Flex>
                </Group>
              </StyledRadioCard>
              <StyledRadioCard value="ltd" radius="lg" px="xl" py="md">
                <Group align="center" justify="space-between">
                  <Flex align="center" gap="xs">
                    <Text fz="xl" c="gray.7" fw={600}>
                      Lifetime
                    </Text>
                    <Badge
                      variant="light"
                      size="sm"
                      radius="lg"
                      color="red"
                      leftSection={<MdOutlineTimer size="12" />}
                    >
                      Limited
                    </Badge>
                  </Flex>
                  <Flex fw={500} align="baseline" fz="sm" c="gray.5">
                    <Text fw={600} fz="xl" c="gray.7">
                      ${PRICING.LTD}
                    </Text>
                    /lifetime
                  </Flex>
                </Group>
              </StyledRadioCard>
            </Stack>
            <Button
              component="a"
              href={getUpgradeLink()}
              target="_blank"
              color="#120F43"
              fullWidth
              mt="xl"
              size="xl"
              radius="md"
              leftSection={<MdRocketLaunch />}
            >
              Upgrade
            </Button>
          </Radio.Group>
          <Flex pt="sm" c="dimmed" justify="center" align="center" gap={4}>
            <AiOutlineInfoCircle />
            <Text size="xs">
              Payment email must be matching with the account registered to the JSON Crack.
            </Text>
          </Flex>
        </Container>
      </Layout>
    </>
  );
};

export default Premium;
