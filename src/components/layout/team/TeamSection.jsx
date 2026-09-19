import { ProfesionalCard } from '../../ui';
import { SectionLayout } from '../';
import styles from './TeamSection.module.scss';

export const TeamSection = ({ data }) => {
  const { title, subtitle, items, about } = data;
  return (
    <SectionLayout id={'team'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            {items?.map(({ image, name, speciality, cta, id }) => (
              // Subtítulo de referencia del contenido.
              <ProfesionalCard
                key={id}
                image={image}
                name={name}
                speciality={speciality}
                cta={cta}
              />
            ))}
          </div>
          <div className={styles.about}>
            {about?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
