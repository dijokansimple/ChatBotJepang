import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function AiRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/ai/ai-sensei');
  }, []);

  return null;
}
