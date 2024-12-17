import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserProfile } from "@/context/UserProfileContext";
import ProfileEdit from "./ProfileEdit";
import PopoverDemo from "./PopOverFav";

const ProfileView = () => {
  const { profile } = useUserProfile();

  return (
    <div className="flex items-center justify-center min-h-screen px-20 bg-gray-100 dark:bg-gray-800">
      <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={profile.image} alt={profile.name} />
            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{profile.name}</CardTitle>
          <p className="text-gray-500 dark:text-gray-400">@{profile.email}</p>
        </CardHeader>

        <CardContent>
          <PopoverDemo fav={profile.fav}></PopoverDemo>
        </CardContent>

        {/* edit */}
        <div className="flex justify-center mt-4">
          <ProfileEdit />
        </div>
      </Card>
    </div>
  );
};

export default ProfileView;
