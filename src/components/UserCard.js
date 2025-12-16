

const UserCard = ({ user }) => {
  return (
    <div className="w-full bg-white  p-4">
      <p className="text-lg font-semibold text-gray-800">
        {user.name}
      </p>
      <p className="text-sm text-gray-600">
        {user.email}
      </p>
    </div>
  );
};

export default UserCard;

