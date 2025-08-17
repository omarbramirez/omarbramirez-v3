export interface ContactFormValues {
  access_key: string;
  name: string;
  email: string;
  message: string;
}

export interface NavbarProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
}

export interface SectionProps {
  isDarkMode: boolean;
}

export interface Education {
  title: string;
  list: string[];
}