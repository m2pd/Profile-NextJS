import Header from '../shared/Header';

const BaseLayout = (props) => {
  const {
    children,
    className
  } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className="cover" >
        <div className='wrapper'>
          {children}
        </div>
      </main>
    </div>
  );
};

export default BaseLayout;