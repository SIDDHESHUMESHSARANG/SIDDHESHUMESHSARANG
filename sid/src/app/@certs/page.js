"use client";
import React, { useEffect, useState } from "react";
import CertsCard from "@/components/CertsCard";

const CertsPage = () => {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const baseUrl =
          typeof window !== "undefined" ? window.location.origin : "";
        const res = await fetch(`${baseUrl}/api/certs`);
        if (!res.ok) {
          console.error("Certs API error status:", res.status);
          throw new Error("Failed to fetch certs");
        }
        const data = await res.json();
        console.log("Certs API response:", data);
        setCerts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error loading certs:", err);
        setError("Could not load certifications.");
      } finally {
        setLoading(false);
      }
    };

    fetchCerts();
  }, []);

  return (
    <div className="page px-4 md:px-6 pb-20 pt-10 md:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:gap-8">
          <header className="flex flex-col gap-4 mb-2">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary/40 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="Certifications avatar"
                    src="https://api.dicebear.com/9.x/identicon/svg?seed=Certifications"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Certifications
                </h2>
                <p className="text-sm md:text-base text-base-content/70">
                  Proof I don&apos;t just code, I study too.
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-base-content/70 max-w-2xl">
              Courses, certifications, and achievements that keep me learning and
              leveling up.
            </p>
            {loading && (
              <p className="text-sm md:text-base text-base-content/60">
                Loading certifications...
              </p>
            )}
            {error && !loading && (
              <p className="text-sm md:text-base text-error">{error}</p>
            )}
          </header>

          {!loading && !error && (
            <>
              {certs.length === 0 ? (
                <p className="text-sm md:text-base text-base-content/60">
                  No certifications to show yet. Check back soon!
                </p>
              ) : (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {certs.map((cert) => (
                    <CertsCard
                      key={cert._id || cert.id || cert.title}
                      cert={cert}
                    />
                  ))}
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertsPage;

