import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchWeather from "../api/api";
import { updateActual, updateCity, updateLoading } from "../app/store";
import { IActual } from "../utils/Weather";

const SearchBar = () => {
  const toast = useToast();
  const [searchVal, setSearchVal] = useState(
    localStorage.getItem("city") || ""
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchVal) {
      searchCity();
    }
  }, []);

  const searchCity = () => {
    const taskText = searchVal.trim();

    if (!taskText) {
      toast({
        title: "Invalid city name!",
        position: "top",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      // setStatusInput(false);

      return setSearchVal("");
    }

    localStorage.setItem("city", searchVal);
    dispatch(updateLoading(true));
    dispatch(updateCity(taskText));
    setSearchVal("");
    fetchWeather(searchVal)
      .then((res) => {
        if (res.status === 200) dispatch(updateActual(res.data as IActual));
      })
      .catch((error) => {
        var msg = "City not found!";

        if (error.response.data.cod !== 404) {
          msg = error.response.data.message;
        }

        toast({
          title: msg,
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        dispatch(updateActual({}));
      })
      .finally(() => {
        dispatch(updateLoading(false));
      });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCity();
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="4">
        <Input
          focusBorderColor="blue.500"
          h="46"
          // borderColor={!statusInput ? 'red.300' : 'transparent'}
          variant="filled"
          placeholder="Enter city name..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <Button colorScheme="blue" px="8" pl="10" pr="10" h="46" type="submit">
          Search
        </Button>
      </HStack>
    </form>
  );
};

export default SearchBar;
