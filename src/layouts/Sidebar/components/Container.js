import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../../slices/user';
import ContainerItems from './ContainerItems';
import constants from '../../../utilities/constants';

const list = constants.SIDEBAR_LIST;

const Container = ({ handleDrawerToggle, mobileOpen }) => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);

  const isAllowed = () => {
    if (user?.is_admin_teacher == null || user?.is_admin_teacher === false) {
      return false;
    }
    return true;
  };

  return (
    <div className="container">
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item, index) => {
            if (item.permission === true && !isAllowed()) return null;
            return (
              <ContainerItems
                key={index}
                item={item}
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
              />
            );
          })}
      </ul>
    </div>
  );
};

Container.propTypes = {};

export default Container;
