'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { type FC, type PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const { push } = useRouter();

  return <NextUIProvider navigate={push}>{children}</NextUIProvider>;
};
