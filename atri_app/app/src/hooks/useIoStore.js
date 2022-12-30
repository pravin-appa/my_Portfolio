import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "Services": {},
  "Projects": {}
}});

export default useIoStore;
