export interface FormState {
  [key: string]: string;
}

export interface InputProps {
  type: string;
  label: string;
  name: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
