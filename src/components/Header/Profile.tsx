import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}


export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leandro Alencar</Text>
          <Text color="gray.300" fontSize="small">zzleandrobritozz@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Leandro Alencar" src="https://github.com/Lealencar.png" />
    </Flex>
  )
}
