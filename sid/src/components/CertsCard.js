import React from "react";

const CertsCard = ({ cert }) => {
  if (!cert) return null;

  const { title, status, issuedOn, issuedBy, grade } = cert;

  return (
    <article className="card rounded-3xl border border-primary/20 bg-base-300 shadow-2xl h-full flex flex-col">
      <div className="card-body p-5 md:p-6 flex flex-col gap-4">
        <header className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              {title}
            </h3>
            <p className="mt-1 text-xs md:text-sm text-base-content/70">
              {issuedBy}
            </p>
          </div>
          {status && (
            <span className="badge badge-success badge-outline rounded-full whitespace-nowrap text-xs md:text-[11px]">
              {status}
            </span>
          )}
        </header>

        <dl className="mt-1 grid grid-cols-2 gap-3 text-xs md:text-sm">
          {issuedOn && (
            <div className="flex flex-col gap-0.5">
              <dt className="text-base-content/60">Issued on</dt>
              <dd className="font-medium">{issuedOn}</dd>
            </div>
          )}
          {grade && (
            <div className="flex flex-col gap-0.5">
              <dt className="text-base-content/60">Grade</dt>
              <dd className="font-medium">{grade}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
};

export default CertsCard;

