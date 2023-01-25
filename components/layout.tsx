import Header from './header';
import Footer from './footer';

type LayoutPropsType = {
  children: JSX.Element;
};

function Layout({ children }: LayoutPropsType): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
