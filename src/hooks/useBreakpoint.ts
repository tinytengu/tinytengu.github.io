import useMediaQuery from "./useMediaQuery";

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

export const breakpointWidth: { [key in Breakpoint]: number } = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useBreakpointMin(breakpoint: Breakpoint): boolean {
  return useMediaQuery(`(min-width: ${breakpointWidth[breakpoint]}px)`);
}

export function useBreakpointMax(breakpoint: Breakpoint): boolean {
  return useMediaQuery(`(max-width: ${breakpointWidth[breakpoint]}px)`);
}
