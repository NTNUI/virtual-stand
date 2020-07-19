import React, {useState, useEffect, useContext, createContext} from 'react';
import PropTypes from 'prop-types';
import firebase from './firebase';

const GroupsContext = createContext();

const GroupsProvider = (props) => {
  const {children} = props;
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    db.collection('info')
      .doc('group')
      .onSnapshot((groups) => {
        if (groups.exists) {
          setGroups(groups.data());
        }
      });
  }, []);

  return (
    <GroupsContext.Provider value={groups}>
      {children}
    </GroupsContext.Provider>
  );
};

GroupsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useGroups = () => {
  const context = useContext(GroupsContext);
  if (context === undefined) {
    throw new Error('useGroups must be used within a UserProvider');
  }
  return context;
};

export {GroupsProvider, useGroups};
