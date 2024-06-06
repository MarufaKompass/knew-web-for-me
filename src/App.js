import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Layout from "./common/components/layout/user/Layout";
import PricingProvider from "./context/PricingProvider";
import Loader from "./Loader";
import { PulseLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <PricingProvider>
        <div className="">
          <div className="flex justify-center items-center ">
            {loading ? (
              <Loader loading={loading} />
            ) : (
              <>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-screen">
                      <PulseLoader color="#12a9b2" />
                    </div>
                  }
                >
                  <Layout>
                    <AppRoutes />
                  </Layout>
                </Suspense>
              </>
            )}
          </div>
        </div>
      </PricingProvider>
    </>
  );
}

export default App;
