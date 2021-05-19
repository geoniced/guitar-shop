const PageContent = () => {
  return (
    <main className="page-content">
      <h1 className="page-content__title">Каталог гитар</h1>
      <section className="page-content__guitar-filters guitar-filters">
        <h2 className="guitar-filters__title">Фильтр</h2>
      </section>
      <section className="page-content__guitar-catalog guitar-catalog">
        <h2 className="visually-hidden">Список гитар</h2>
      </section>
    </main>
  )
};

export default PageContent;
