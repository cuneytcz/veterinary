import { Header } from "@/components";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { AppLayout };
