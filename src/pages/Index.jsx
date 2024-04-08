import React, { useState } from "react";
import { Box, Heading, Input, Button, Grid, Image, Text } from "@chakra-ui/react";
import DealModal from "./DealModal";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const [results, setResults] = useState([
    {
      id: 1,
      name: "Vintage Levi Jeans",
      image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGV2aSUyMGplYW5zfGVufDB8fHx8MTcxMTQzOTY0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      price: "$35",
      url: "#",
    },
    {
      id: 2,
      name: "Retro Adidas Jacket",
      image: "https://images.unsplash.com/photo-1602751184834-947bd06e8710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFkaWRhcyUyMGphY2tldHxlbnwwfHx8fDE3MTE0Mzk2NDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
      price: "$50",
      url: "#",
    },
    {
      id: 3,
      name: "Used Nike Sneakers",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VkJTIwbmlrZSUyMHNuZWFrZXJzfGVufDB8fHx8MTcxMTQzOTY0N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      price: "$25",
      url: "#",
    },
  ]);

  const handleSearch = () => {
    // TODO: Implement actual search
    console.log("Searching for:", searchTerm);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Second Hand Pricer
      </Heading>

      <Box mb={8}>
        <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for an item..." mr={4} />
        <Button onClick={handleSearch} colorScheme="red" leftIcon={<FaSearch />}>
          Search
        </Button>
      </Box>

      <Grid gridTemplateColumns="repeat(3, 1fr)" gap={6}>
        {results.map((item) => (
          <Box key={item.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={item.image} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {item.name}
            </Heading>
            <Text fontSize="xl" mb={4}>
              {item.price}
            </Text>
            <Button
              colorScheme="red"
              onClick={() => {
                setModalItem(item);
                setModalOpen(true);
              }}
            >
              View Deal
            </Button>
          </Box>
        ))}
      </Grid>
      {modalOpen && <DealModal isOpen={modalOpen} onClose={() => setModalOpen(false)} item={modalItem} />}
    </Box>
  );
};

export default Index;
