import { Heading, HStack, Image, Text, VStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <LinkBox
      as="article"
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "lg",
      }}
    >
      <Image
      src={imageSrc}
          alt={title}
          height="330px"
          width="200%"
          objectFit="cover"
          borderTopRadius="xl"/>

      <VStack spacing={4} p={4} alignItems="flex-start" flex="1">
        <Heading as="h3" size="md" color="#3032d3">
          <LinkOverlay href={link} isExternal>
            {title}
          </LinkOverlay>
        </Heading>

        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>

        <HStack spacing={2} mt="auto" color="#3032d3" fontWeight="semibold">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </LinkBox>
  );
};

export default Card;
