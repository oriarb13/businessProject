import Avatar from "@mui/material/Avatar";
import { useUser } from "@/context/UserContext"; // אם אתה משתמש ב-context

const UserPage = () => {
  const { user } = useUser(); // שימוש ב-context כדי לקבל את פרטי המשתמש

  // אם המשתמש לא נמצא או אם אין שם תמונה, נציג תמונה ברירת מחדל
  const userImage = user?.image ? user.image : "default-avatar.png"; // הוספת תמונה ברירת מחדל אם אין תמונה

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 bg-gray-100">
      {/* Avatar and Action Button */}
      <div className="flex flex-col items-center w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <Avatar className="w-32 h-32 shadow-lg">
          <img
            src={userImage}
            alt={`${user?.username}'s photo`}
            className="object-cover w-full h-full rounded-full"
          />
        </Avatar>
        <button className="px-4 py-2 mt-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
          Edit Profile
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <span className="flex items-center gap-2 text-2xl font-bold">
          @{user?.username}
        </span>
      </div>

      <div className="flex flex-col items-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow-md ">
          owner of: ({user?.ownBusinesses?.length || 0}) Businesses
        </div>
        <div className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow-md ">
          saved: ({user?.savedBusinesses?.length || 0}) Businesses
        </div>
      </div>
    </div>
  );
};

export default UserPage;
