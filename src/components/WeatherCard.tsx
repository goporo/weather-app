import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import { CgDetailsMore } from "react-icons/cg";

import { IActual } from "../utils/Weather";

const WeatherCard = ({ props }: { props: IActual }) => {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const toast = useToast();

  return (
    <>
      <Stack spacing={2} direction="row">
        <Wrap spacing="10px" overflow={"visible"} mb="5">
          <Box
            padding="6"
            boxShadow="lg"
            minW="xs"
            maxW="xl"
            bg="whiteAlpha.100"
          >
            <Center>
              <Heading display={"flex"} as="h1" size="4xl">
                {props.main?.temp.toPrecision(2)}°C
              </Heading>
            </Center>
            <Center>
              <Image
                src={`https://openweathermap.org/img/wn/${props.weather?.[0].icon}@2x.png`}
                alt={props.weather?.[0].description}
              />
            </Center>
            <Center>
              <Text> {props.weather?.[0].description}</Text>
            </Center>
          </Box>
          <Box
            padding="6"
            boxShadow="lg"
            minW="xs"
            maxW="xl"
            bg="whiteAlpha.100"
          >
            <Box mb="5">
              <Heading as="h1">
                {props.name} &nbsp;
                <Badge variant="solid" colorScheme="green">
                  NOW
                </Badge>
              </Heading>
              <Text display={"flex"}>
                <span className="font-semibold">
                  Country:{" "}
                  {regionNames.of(props.sys?.country || "") || "Unknown"}
                </span>
              </Text>
            </Box>
            <Box>
              <Text display={"flex"}>
                Feels like: {props.main?.feels_like.toPrecision(2)}C°
              </Text>
              <Text display={"flex"}>
                Humidity: {props.main?.humidity.toPrecision(2)}%
              </Text>
              <Button
                leftIcon={<CgDetailsMore />}
                w="100%"
                marginTop="10"
                colorScheme="blue"
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Coming soon!",
                    position: "top",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                See more details
              </Button>
            </Box>
          </Box>
        </Wrap>
      </Stack>
    </>
  );
};

export default WeatherCard;
