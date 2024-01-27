import cron from 'node-cron';
import { delRooms } from './store/roomsSlice';
import { delUsers } from './store/usersSlice';
import { useDispatch } from 'react-redux';

cron.schedule('45 3 * * *', () => {
  const dispatch = useDispatch();
  dispatch(delRooms());
  dispatch(delUsers());
});
