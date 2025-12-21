import PageNameRoot from "./page-name";


const PageTitleArea = (props) => {
const { PageName } = props
  return (
    <>
      <section className="bx-page-titles-breadcrumb">
        <PageNameRoot PageName={PageName} />
      </section>
    </>
  );
};

export default PageTitleArea;
