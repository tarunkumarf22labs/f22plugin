import { useEffect, useState } from "uelements";

export function useLocalstorage(key: string, initial: any) {
  const [first, setfirst] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key) as any) || initial;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(first));
  }, [first, setfirst]);

  return [first, setfirst];
}