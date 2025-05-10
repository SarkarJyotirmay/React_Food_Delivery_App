// src/hooks/useAuthListener.js
import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setLoading } from "../store/slices/authSlice"; 
import { app } from "../auth/firebase";

const auth = getAuth(app);

function useAuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
        }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
}

export default useAuthListener;
