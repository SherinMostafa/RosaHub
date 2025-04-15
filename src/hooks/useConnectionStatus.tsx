"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Notification from "../utils/NotificationUtility";

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const lastStatus = useRef<boolean | null>(null);

  const handleOnline = useCallback(() => {
    setIsOnline(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  }, []);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  }, []);

  useEffect(() => {
    const checkOnlineStatus = () => setIsOnline(navigator.onLine);

    checkOnlineStatus();

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOnline, handleOffline]);

  useEffect(() => {
    if (showToast && lastStatus.current !== isOnline) {
      lastStatus.current = isOnline;

      if (isOnline) {
        Notification({
          title: "Hurray!",
          message: "Internet connection is back.",
          position: "bottom-left",
        }).Success();
      } else {
        Notification({
          title: "Oops!",
          message: "Internet connection is lost.",
          position: "bottom-left",
        }).Error({ errors: "Internet connection is lost." });
      }
    }
  }, [showToast, isOnline]);

  return null;
};

export default ConnectionStatus;
