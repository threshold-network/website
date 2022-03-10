import React, { FC } from "react"
import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import { Label1 } from "./Typography"

export interface TabsData {
  label: string | JSX.Element
  content: string | JSX.Element
}

const DataTabs: FC<{ data: TabsData[] }> = ({ data }) => {
  return (
    <Box bg="gray.900">
      <Tabs isFitted variant="unstyled">
        <TabList>
          {data.map((tab, index) => (
            <Tab
              key={index}
              py="20px"
              color="gray.700"
              borderColor="gray.800"
              _selected={{
                borderTop: "1px solid",
                bg: "blackAlpha.200",
                color: "white",
              }}
            >
              <Label1>{tab.label}</Label1>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index} bg="blackAlpha.200">
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default DataTabs
