import Header from "@components/layout/hedear";
import Footer from "@components/layout/footer";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header></Header>
      <main className="">{children}</main>
      <Footer></Footer>
    </div>
  );
}
