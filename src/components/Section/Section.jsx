import css from './Section.module.css';

export const Section = props => {
  const { title, children } = props;
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
