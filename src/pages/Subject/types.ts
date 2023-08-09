export const enum EXTRA_FIELD_TYPES {
  EXPANDABLE = "expandable_text",
  PHONES = "phones",
  WEBSITE = "website_url",
  SOCIAL = "social_media",
  EMAIL = "email_address",
  NOTICE = "notice",
}

export const extraFieldText = {
  [EXTRA_FIELD_TYPES.EXPANDABLE]: "Раскрывающийся текст",
  [EXTRA_FIELD_TYPES.PHONES]: "Телефон",
  [EXTRA_FIELD_TYPES.WEBSITE]: "Веб-сайт",
  [EXTRA_FIELD_TYPES.SOCIAL]: "Ссылка на социальные сети",
  [EXTRA_FIELD_TYPES.EMAIL]: "Электронная почта",
  [EXTRA_FIELD_TYPES.NOTICE]: "Уведомление",
};

export interface ExtraField {
  type: EXTRA_FIELD_TYPES;
  data:
    | ExpandableText
    | PhoneNumbers
    | Website
    | SocialMediaList
    | EmailAddress
    | Notice;
}

export interface ExpandableText {
  title: string;
  description: string;
}

export interface PhoneNumber {
  phoneNumber: string;
  description: string;
}

export type PhoneNumbers = Array<PhoneNumber>;

export type Website = { websiteUrl: string };

export interface SocialMedia {
  type: string;
  url: string;
}

export type SocialMediaList = { socialMediaList: Array<SocialMedia> };

export type EmailAddress = { emailAddress: string };

export interface Notice {
  color: string;
  title: string;
  description: string;
}
