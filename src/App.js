import Profile from './componets/task1SocialProfile/profile';
import user from './componets/task1SocialProfile/user.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
}
