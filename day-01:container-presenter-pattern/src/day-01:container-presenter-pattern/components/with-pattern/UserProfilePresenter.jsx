import { useEffect, useState } from "react";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import PostsList from "./PostList";
import ProfileHeader from "./ProfileHeader";

import PropTypes from "prop-types";

const UserProfilePresenter = ({
  user,
  posts,
  loading,
  error,
  onUpdateUser,
  onRetry,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(null);

  // Initialize form data when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  }, [user]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear form error when user starts typing
    if (formError) setFormError(null);
  };

  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
      setFormError(null);
    } else {
      setFormError(result.error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormError(null);
    // Reset form data
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading user profile..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Oops! Something went wrong"
        message={error}
        onRetry={onRetry}
      />
    );
  }

  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        formError={formError}
        onStartEdit={() => setIsEditing(true)}
        onSaveProfile={handleSaveProfile}
        onCancelEdit={handleCancelEdit}
        onInputChange={handleInputChange}
      />

      <PostsList posts={posts} />
    </div>
  );
};

UserProfilePresenter.propTypes = {
  user: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onUpdateUser: PropTypes.func.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default UserProfilePresenter;
