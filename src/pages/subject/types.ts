export const enum EXTRA_FIELD_TYPES {
    EMAIL = 'email_address',
    EXPANDABLE = 'expandable_text',
    NOTICE = 'notice',
    PHONES = 'phones',
    SOCIAL = 'social_media',
    WEBSITE = 'website_url',
}

export const extraFieldText = {
    [EXTRA_FIELD_TYPES.EMAIL]: 'Электронная почта',
    [EXTRA_FIELD_TYPES.EXPANDABLE]: 'Раскрывающийся текст',
    [EXTRA_FIELD_TYPES.NOTICE]: 'Уведомление',
    [EXTRA_FIELD_TYPES.PHONES]: 'Телефон',
    [EXTRA_FIELD_TYPES.SOCIAL]: 'Ссылка на социальные сети',
    [EXTRA_FIELD_TYPES.WEBSITE]: 'Веб-сайт',
};

export interface ExtraField {
    data: EmailAddress | IExpandableText | IPhoneNumbers | Notice | SocialMediaList | Website;
    type: EXTRA_FIELD_TYPES;
}

export interface IExpandableText {
    description: string;
    title: string;
}

export interface IPhoneNumber {
    description: string;
    phoneNumber: string;
}

export type IPhoneNumbers = {phones: Array<IPhoneNumber>};

export type Website = {websiteUrl: string};

export interface SocialMedia {
    type: string;
    url: string;
}

export type SocialMediaList = {socialMediaList: Array<SocialMedia>};

export type EmailAddress = {emailAddress: string};

export interface Notice {
    color: string;
    description: string;
    title: string;
}
