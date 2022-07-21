import React, { useEffect, useMemo, useState } from "react";
import type { IConnectivityContext } from "./type";

export const ConnectivityContext = React.createContext<IConnectivityContext>({
  isOnline: true,
});

export const ConnectivityProvider: React.FunctionComponent = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const offline = () => {
    setIsOnline(false);
  };
  const online = () => {
    setIsOnline(true);
  };

  useEffect(() => {
    window.addEventListener("offline", offline);
    window.addEventListener("online", online);
    return () => {
      window.removeEventListener("offline", offline, false);
      window.removeEventListener("online", online, false);
    };
  }, []);

  const contextValues = useMemo(
    () => ({
      isOnline,
    }),
    [isOnline]
  );
  return (
    <ConnectivityContext.Provider value={contextValues}>
      {children}
    </ConnectivityContext.Provider>
  );
};
