import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Builds from "components/builds/builds";
import styles from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        paddingTop="3rem"
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2}>
          <Heading as="h3" size="lg" paddingBottom="1rem">
            Build history
          </Heading>
          <Builds></Builds>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </div>
  );
}

export default Dashboard;
