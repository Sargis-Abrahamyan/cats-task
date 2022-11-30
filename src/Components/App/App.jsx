import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Get_Categories, Get_Data_Cats } from '../../api/api.js';
import { actionCateogris, actionGetCats, actionLoading } from "../../Redux/actions/actions.js"
import RootRoute from '../Routes/RootRoute';
import Loading from '../Layout/Loading/Loading.jsx';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { categoryId, loading } = state;

  useEffect(() => {

    const Get_Data = async () => {
      const categories_url = await Get_Categories();
      const cats_url = await Get_Data_Cats(categoryId);

      dispatch(actionCateogris(categories_url));
      dispatch(actionGetCats(cats_url));
      dispatch(actionLoading(false));
    };

    Get_Data();
  }, [categoryId]);

  return (
    <>
      {loading ? <Loading /> : <RootRoute />}
    </>
  )
}

export default App;


