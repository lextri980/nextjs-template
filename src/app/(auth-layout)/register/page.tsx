'use client';
import Toaster from '@/components/toaster';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Register() {
  const router = useRouter();

  const redirectToLogin = () => {
    toast(() => <Toaster />);
    router.push('/login');
  };

  return (
    <div>
      <Link href='/login'>Register</Link>
      <br />
      <button onClick={redirectToLogin}>Click</button>
    </div>
  );
}
