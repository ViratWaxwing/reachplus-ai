"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface MousePosition {
	elementX: number | null;
	elementY: number | null;
	clientX: number | null;
	clientY: number | null;
}

export function useMouse() {
	const [mouse, setMouse] = useState<MousePosition>({
		elementX: null,
		elementY: null,
		clientX: null,
		clientY: null,
	});

	const parentRef = useRef<HTMLElement>(null);

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (!parentRef.current) return;

		const rect = parentRef.current.getBoundingClientRect();
		const elementX = e.clientX - rect.left;
		const elementY = e.clientY - rect.top;

		setMouse({
			elementX,
			elementY,
			clientX: e.clientX,
			clientY: e.clientY,
		});
	}, []);

	const handleMouseLeave = useCallback(() => {
		setMouse({
			elementX: null,
			elementY: null,
			clientX: null,
			clientY: null,
		});
	}, []);

	useEffect(() => {
		const element = parentRef.current;
		if (!element) return;

		element.addEventListener("mousemove", handleMouseMove);
		element.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			element.removeEventListener("mousemove", handleMouseMove);
			element.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [handleMouseMove, handleMouseLeave]);

	return [mouse, parentRef] as const;
}
