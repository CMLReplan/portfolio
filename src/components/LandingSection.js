import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../images/photo5.jpg";

const greeting = "Hello, I am Matt!";
const bio1 = "A Software Developer";
const bio2 = "with experience in"
const bio3 = "backend and frontend development";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#454e9c"
  >
    <VStack spacing={8} textAlign="center">
      <Avatar
        
        name="Matt"
        src={profilePic}
        
        /* Responsive size */
        boxSize={{ base: "130px", md: "180px", lg: "240px" }}

        /* Ensures face-friendly crop */
        objectFit="cover"

        /* Subtle border for contrast */
        border="3px solid white"

        /* Hover animation */
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      />

      <Heading as="h4" size="md"> 
         {greeting} 
       </Heading> 

    {/* Bio Headings  */}
     </VStack> 
     <VStack spacing={2}> 
       <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }}> 
         {bio2} 
       </Heading> 
       <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }}> 
         {bio3} 
       </Heading> 
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
