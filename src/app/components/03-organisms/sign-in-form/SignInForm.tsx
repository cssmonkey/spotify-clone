import React from 'react';

import { Button } from '@/components/01-atoms/button/Button';
import { signInAction } from '@/actions/auth';

export const SignInForm: React.FC = () => {
  return (
    <form action={signInAction}>
      <Button type='submit' text='Signin with Spotify' />
    </form>
  );
};
