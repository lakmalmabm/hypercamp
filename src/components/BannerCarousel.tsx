'use client';

import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const bannerImages = [
  '/banner1.png',
  '/banner2.png',
  '/banner3.png'
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgColor = useColorModeValue('white', 'gray.800');
  const shadowColor = useColorModeValue('lg', 'dark-lg');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <Box
      position="relative"
      h={{ base: "100px", md: "150px" }}
      w="full"
      bg={bgColor}
      borderRadius="2xl"
      overflow="hidden"
      mb={12}
      boxShadow={shadowColor}
    >
      <Image
        src={bannerImages[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        fill
        style={{ objectFit: 'cover' }}
        priority={currentIndex === 0}
      />

      {/* <IconButton
        aria-label="Previous banner"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        bg="blackAlpha.600"
        color="white"
        size="sm"
        _hover={{ bg: 'blackAlpha.800' }}
        onClick={prevSlide}
      />

      <IconButton
        aria-label="Next banner"
        icon={<ChevronRightIcon />}
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        bg="blackAlpha.600"
        color="white"
        size="sm"
        _hover={{ bg: 'blackAlpha.800' }}
        onClick={nextSlide}
      /> */}

      <Box
        position="absolute"
        bottom={3}
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        gap={2}
      >
        {bannerImages.map((_, index) => (
          <Box
            key={index}
            w={2}
            h={2}
            borderRadius="full"
            bg={currentIndex === index ? "white" : "whiteAlpha.600"}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.2)' }}
          />
        ))}
      </Box>
    </Box>
  );
}