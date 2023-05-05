"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import api from "@/api";

const useAuth = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          console.log('session', session?.user.accessToken);
          config.headers["Authorization"] = `Bearer ${session?.user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
    };
  }, [session]);
};

export default useAuth;