const PageContent = () => {
  return (
    <main className="page-content">
      <h1 className="page-content__title">Каталог гитар</h1>

      <ul className="page-content__breadcrumbs">
        <li className="page-content__breadcrumbs__item">
          <a href="#" className="page-content__breadcrumbs__link">Главная</a>
        </li>
        <li className="page-content__breadcrumbs__item">
          <a className="page-content__breadcrumbs__link page-content__breadcrumbs__link--current">Каталог</a>
        </li>
      </ul>

      <section className="page-content__guitar-filters guitar-filters">
        <h2 className="guitar-filters__title">Фильтр</h2>

        <form action="#" className="guitar-filters__form">
          <fieldset className="guitar-filters__fieldset">
            <legend className="guitar-filters__legend">Цена, ₽</legend>

            <label htmlFor="filters-price-from" className="visually-hidden">От</label>
            <input className="guitar-filters__numeric-input" type="number" name="filters-price-from" id="filters-price-from" placeholder="1 000" />

            <label htmlFor="filters-price-to" className="visually-hidden">До</label>
            <input className="guitar-filters__numeric-input" type="number" name="filters-price-to" id="filters-price-to" placeholder="30 000" />
          </fieldset>

          <fieldset className="guitar-filters__fieldset">
            <legend className="guitar-filters__legend">Тип гитар</legend>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-type-acoustic" id="filters-type-acoustic" />
            <label htmlFor="filters-type-acoustic" className="guitar-filters__checkbox-label">Акустические гитары</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-type-electro" id="filters-type-electro" defaultChecked />
            <label htmlFor="filters-type-electro" className="guitar-filters__checkbox-label">Электрогитары</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-type-ukulele" id="filters-type-ukulele" defaultChecked />
            <label htmlFor="filters-type-ukulele" className="guitar-filters__checkbox-label">Укулеле</label>
          </fieldset>

          <fieldset className="guitar-filters__fieldset">
            <legend className="guitar-filters__legend">Количество струн</legend>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-4" id="filters-strings-4" defaultChecked />
            <label htmlFor="filters-strings-4" className="guitar-filters__checkbox-label">4</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-6" id="filters-strings-6" defaultChecked />
            <label htmlFor="filters-strings-6" className="guitar-filters__checkbox-label">6</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-7" id="filters-strings-7" />
            <label htmlFor="filters-strings-7" className="guitar-filters__checkbox-label">7</label>

            <input className="guitar-filters__checkbox" type="checkbox" name="filters-strings-12" id="filters-strings-12" disabled />
            <label htmlFor="filters-strings-12" className="guitar-filters__checkbox-label">12</label>
          </fieldset>

          <button className="guitar-filters__show button" type="submit">Показать</button>
        </form>
      </section>
      <section className="page-content__guitar-catalog guitar-catalog">
        <h2 className="visually-hidden">Список гитар</h2>
      </section>
    </main>
  )
};

export default PageContent;
