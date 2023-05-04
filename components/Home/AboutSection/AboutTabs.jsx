import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { ABOUT_PANELS, ABOUT_TABS } from "../../../constants/shared";
import { useState } from "react";

const AboutTabs = () => {
  const [selected, setSelected] = useState(ABOUT_TABS[0]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Tabs
      index={tabIndex}
      onChange={handleTabsChange}
      variant="soft-rounded"
      mt="32px"
    >
      <TabList
        gap="16px"
        overflowX="scroll"
        scrollSnapType="x"
        mx="-16px"
        p="16px"
      >
        {ABOUT_TABS.map((tab) => (
          <Box
            key={tab.id}
            transition="all .3s"
            bg={
              selected.id === tab.id
                ? "linear-gradient(246.01deg, #FE6569 -8%, rgba(255, 255, 255, 0) 38.07%, rgba(205, 102, 208, 0.74) 72.89%, #563FEB 97.11%)"
                : "rgba(255, 255, 255, 0.4)"
            }
            borderRadius="100px"
            // css={{
            //   scrollSnapAlign: "end"
            // }}
          >
            <Tab
              w="max-content"
              m="1px"
              bg="#050506 !important"
              color="#fff !important"
              fontSize="16px"
              lineHeight="100%"
              fontWeight={300}
              p="15px 24px"
              borderRadius="100px"
              transition="all .3s"
              onClick={() => setSelected(tab)}
              _selected={{
                bg: "linear-gradient(101.28deg, #6DB0F8 -36.78%, #7872FF 52.74%, #3626F0 158.53%)",
                backgroundClip: "text",
              }}
            >
              {tab.title}
            </Tab>
          </Box>
        ))}
      </TabList>
      <TabPanels>
        {ABOUT_PANELS.map((panel) => (
          <TabPanel
            key={panel.id}
            mt="16px"
            p={{ base: "30px", lg: "40px", xl: "60px" }}
            border="2px solid #3e3e3e"
            borderRadius="25px"
            bg="linear-gradient(111.49deg, rgba(174, 192, 255, 0.28) -8.95%, rgba(255, 255, 255, 0.007) 114%)"
            blur="50px"
          >
            <Box>
              <Heading
                as="h3"
                bg="linear-gradient(180deg, rgba(10, 10, 57, 0.414) -16.61%, rgba(255, 255, 255, 0.31875) 48.53%, rgba(13, 15, 42, 0.426) 106.01%), #FFFFFF;"
                bgClip="text"
                fontSize={{ base: "28px", lg: "36px", xl: "42px" }}
                textAlign={{ base: "center", lg: "start" }}
                lineHeight="120%"
                fontWeight={700}
              >
                {panel.title}
              </Heading>
              <Text
                maxW="800px"
                as="div"
                mt={{ base: "20px", lg: "24px", xl: "32px" }}
                fontSize={{ base: "14px", lg: "18px", xl: "24px" }}
                lineHeight="140%"
                fontWeight={400}
                dangerouslySetInnerHTML={{ __html: panel.content }}
                sx={{
                  ol: {
                    marginBottom: "1rem",
                    paddingLeft: "2rem",
                  },
                  li: {
                    marginBottom: "0.5rem",
                  },
                  p: {
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  },
                }}
              />
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default AboutTabs;
