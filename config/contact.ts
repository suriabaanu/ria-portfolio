export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  googlescholar = 'googlescholar',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@Suriabaanurajendran_',
  site: 'suriabaanu.com',
  calendly: 'https://calendly.com/Suriabaanu',
  links: {
    github: 'https://github.com/Suriabaanu',
    linkedin: 'https://www.linkedin.com/in/Suriabaanu',
    googlescholar:
      'https://scholar.google.com/citations?user=8wIfeAsAAAAJ&hl=en',
    twitter: 'https://twitter.com/Suriabaanu_',
    youtube: 'https://www.youtube.com/c/techtravellertales',
    email: 'mailto:Suriabaanu@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/Suriabaanu'
  },
};
