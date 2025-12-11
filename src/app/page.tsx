import { GlobalNav } from '@/components/03-organisms/global-nav/GlobalNav';
import { SignInForm } from '@/components/03-organisms/sign-in-form/SignInForm';

export default function Home() {
  return (
    <>
      <GlobalNav />
      <h1>Welcome to Spotify Clone</h1>
      <SignInForm />
    </>
  );
}
