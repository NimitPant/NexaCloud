'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setTimeout(()=>{
          toast({
            title: "Signed out successfully.",
          })
        }, 0);
        router.push('/sign-in');
        router.refresh();
        
      } else {
        console.error('Failed to sign out');
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Button 
      variant="destructive" 
      onClick={handleSignOut}
      className="w-fit"
    >
      Sign Out
    </Button>
  );
}; 