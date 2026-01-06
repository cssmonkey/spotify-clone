'use server';

import { redirect } from 'next/navigation';
import { auth } from '@/utils/auth';

export async function signInAction() {
  const response = await auth.api.signInSocial({
    body: { provider: 'spotify', callbackURL: '/dashboard' },
  });

  if (response.url) {
    redirect(response.url);
  }
}
