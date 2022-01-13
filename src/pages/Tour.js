import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import AccordionCom from "../components/AccordionCom";
import BasicModal from "../components/BasicModal";
import ImageCollage from "../components/ImageCollage";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          labore eligendi provident optio vitae adipisci atque amet. Qui enim,
          vitae rem architecto non numquam nobis harum commodi debitis libero
          pariatur animi quaerat, accusantium earum id, ipsa accusamus quis nam
          voluptatem.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
          Frequently asked questions
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <AccordionCom />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
