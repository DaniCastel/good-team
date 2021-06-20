import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon, InfoIcon } from "@chakra-ui/icons";

import { Flex } from "@chakra-ui/react";

function BuildsTable() {
  const buildList = [
    {
      id: "1",
      date: "20/06/2021",
      authors: "Ashley, Spinelli",
      status: "inprogress",
      failed: 6,
    },
    {
      id: "2",
      date: "20/06/2021",
      authors: "Ashley, Spinelli",
      status: "failed",
      failed: 6,
    },
    {
      id: "3",
      date: "20/06/2021",
      authors: "Ashley, Spinelli",
      status: "passed",
      failed: 6,
    },
    {
      date: "20/06/2021",
      authors: "Ashley, Spinelli",
      status: "passed",
      failed: 6,
    },
    {
      date: "20/06/2021",
      authors: "Ashley, Spinelli",
      status: "failed",
      failed: 6,
    },
  ];

  function renderTag(status: string) {
    switch (status) {
      case "passed":
        return (
          <Tag size={"md"} variant="subtle" colorScheme="green">
            <TagLeftIcon boxSize="12px" as={CheckCircleIcon} />
            <TagLabel>Passed</TagLabel>
          </Tag>
        );
      case "failed":
        return (
          <Tag size={"md"} variant="subtle" colorScheme="red">
            <TagLeftIcon boxSize="12px" as={CloseIcon} />
            <TagLabel>Failed</TagLabel>
          </Tag>
        );
      case "inprogress":
        return (
          <Tag size={"md"} variant="subtle" colorScheme="blue">
            <TagLeftIcon boxSize="12px" as={InfoIcon} />
            <TagLabel>In progress</TagLabel>
          </Tag>
        );
      default:
        return "";
    }
  }

  const listItems = buildList.map((build) => (
    <Tr key={build.id}>
      <Td>{renderTag(build.status)} </Td>
      <Td>{build.date}</Td>
      <Td isNumeric>{build.failed}</Td>
    </Tr>
  ));
  return (
    <Flex>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>Builds executed daily</TableCaption>
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th isNumeric>Failed</Th>
          </Tr>
        </Thead>
        <Tbody>{listItems}</Tbody>
      </Table>
    </Flex>
  );
}

export default BuildsTable;
