"use client";

import { useEffect, useRef } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	const hasReportedRef = useRef(false);
	useEffect(() => {
	  if (hasReportedRef.current) return;
	  hasReportedRef.current = true;
	  fetch("/api/incr", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	    },
	    body: JSON.stringify({ slug }),
	  });
	}, [slug]);

	return null;
};
