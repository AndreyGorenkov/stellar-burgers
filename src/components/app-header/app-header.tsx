import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '@store';
import { getUserSelector } from '@slices';

export const AppHeader: FC = () => {
  const user = useSelector(getUserSelector);
  return <AppHeaderUI userName={user?.name} />;
};
