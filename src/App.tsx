import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { IWeatherState } from "./utils/Weather";
import LoadingCard from "./components/LoadingCard";
import Footer from "./components/Footer";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const loading = useSelector(
    (state: IWeatherState) => state.weatherWatch.loading
  );
  const actual = useSelector(
    (state: IWeatherState) => state.weatherWatch.actual
  );

  function getBody() {
    const eCity = Object.keys(actual).length > 0;
    if (loading) {
      return <LoadingCard />;
    } else {
      if (eCity) {
        return <WeatherCard props={actual} />;
      } else {
        return null;
      }
    }
  }

  return (
    <div className="App">
      <VStack p={6} minH="100vh" pb={28}>
        <IconButton
          aria-label="Trocar tema"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="md"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          p="4"
          fontWeight="extrabold"
          size="xl"
          bgGradient="linear(to-l, teal.300, blue.500)"
          bgClip="text"
        >
          Weather forecast
        </Heading>
        <SearchBar></SearchBar>
        {getBody()}
        <Footer />
      </VStack>
    </div>
  );
}

export default App;
