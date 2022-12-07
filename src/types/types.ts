export interface TextInputProps {
  forId: string;
  name: string;
  placeholder: string;
  label: string;
  notice?: string;
  error?: string;
}

export interface RadioProps {
  forId: string;
  name: string;
  label: string;
}

export interface SelectProps {
  value: string;
  selected?: boolean;
}
