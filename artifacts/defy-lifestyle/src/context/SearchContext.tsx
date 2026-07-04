import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface SearchContextType {
  isOpen: boolean;
  query: string;
  openSearch: () => void;
  closeSearch: () => void;
  setQuery: (q: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => { setIsOpen(false); setQuery(""); }, []);

  return (
    <SearchContext.Provider value={{ isOpen, query, openSearch, closeSearch, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used inside SearchProvider");
  return ctx;
}
