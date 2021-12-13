import Profile from './componets/task1SocialProfile/Profile';
import user from './componets/task1SocialProfile/user.json';

import Statistics from './componets/task2Statistics/Statistics';
import data from './componets/task2Statistics/data.json';

import FriendList from './componets/task3FriendList/FriendList';
import friends from './componets/task3FriendList/friends.json';

import TransactionHistory from './componets/task4TransactionHistory/TransactionHistory';
import transactions from './componets/task4TransactionHistory/transactions.json';

import Container from './componets/Container/Container';

const App = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default App;
