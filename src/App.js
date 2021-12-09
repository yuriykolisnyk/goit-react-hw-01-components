import Profile from './componets/task1SocialProfile/Profile';
import user from './componets/task1SocialProfile/user.json';

import Statistics from './componets/task2Statistics/Statistics';
import data from './componets/task2Statistics/data.json';

import FriendList from './componets/task3FriendList/FriendList';
import friends from './componets/task3FriendList/friends.json';

import TransactionHistory from './componets/task3TransactionHistory/TransactionHistory';
import transactions from './componets/task3TransactionHistory/transactions.json';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
