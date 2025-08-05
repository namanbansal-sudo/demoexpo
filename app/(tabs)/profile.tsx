import ProfileScreenComponent from "@/screens/Profile/View";

export default function ProfileScreen() {
  const userName = (global as any).userName || 'Guest';

  return (
    <ProfileScreenComponent />
  );
} 