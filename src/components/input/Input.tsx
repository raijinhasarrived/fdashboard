import styles from './Input.module.scss';

interface IIunput {
  label: string;
}

export const Input = ({ label }: IIunput) => {
  return (
    <div className={styles.inputbox}>
      <input required type="text" />
      <span>{label}</span>
      <i></i>
    </div>
  );
};
