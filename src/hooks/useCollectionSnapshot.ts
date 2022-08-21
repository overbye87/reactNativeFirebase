/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

const useCollectionSnapshot = (collection: string) => {
  const [snapshot, setSnapshot] = useState <FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData> | null>(null);
  const onNext = (snapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>) => {
    console.log(snapshot.docs);
    setSnapshot(snapshot);
  };

  const onError = (error: Error) => {
    console.error(error);
  };

  useEffect(() => {
    const unsubscribe = firestore().collection(collection).onSnapshot(onNext, onError);
    return () => {
      unsubscribe();
    };
  }, []);
  return snapshot;
};

export default useCollectionSnapshot;
