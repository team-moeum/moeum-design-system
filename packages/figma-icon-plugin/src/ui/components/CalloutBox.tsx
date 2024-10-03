import React from 'react';
import { Box, Callout } from "@radix-ui/themes"
import { CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

export type CalloutType = 'Error' | 'Success'

export type CallOutInfo = {
  type: CalloutType,
  message: string
}

const typeMap: Record<CalloutType, { color: "red" | "green", icon: React.ReactNode }> = {
  Error: { color: "red", icon: <ExclamationTriangleIcon /> },
  Success: { color: "green", icon: <CheckCircledIcon /> },
};

export const CalloutBox = ({type, message}: CallOutInfo) => {
  return (
    <Box mt="2">
      <Callout.Root color={typeMap[type].color} role="alert" size="2">
        <Callout.Icon>
          {typeMap[type].icon}
        </Callout.Icon>
        <Callout.Text>
          {message}
        </Callout.Text>
      </Callout.Root>
    </Box>
  )
}