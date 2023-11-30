/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Color parser */
  Color: any;
  /** Fields parser */
  FieldModel: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Schedule week parser */
  ScheduleWeek: any;
};

export type CityLocalizedModel = {
  __typename?: 'CityLocalizedModel';
  active: Scalars['Boolean'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
  uuid: Scalars['String'];
};

export type CoordinatesModel = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type CreateCityInput = {
  active: Scalars['Boolean'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
};

export type CreateParkingInput = {
  fields: Array<Scalars['JSON']>;
  levels: Scalars['JSON'];
  placeUuid: Scalars['String'];
  tariffs: Array<Scalars['JSON']>;
};

export type CreatePlaceInput = {
  address: Scalars['String'];
  code: Scalars['String'];
  images: Array<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  latitude: Scalars['Float'];
  logoUrl: Scalars['String'];
  longitude: Scalars['Float'];
  schedule: Scalars['ScheduleWeek'];
  timezone: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePlaceLayerInput = {
  fullName: Scalars['String'];
  placeUuid: Scalars['String'];
  shortName: Scalars['String'];
};

export type CreatePlaceRecommendationInput = {
  icon?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  parentUuid?: InputMaybe<Scalars['String']>;
  placeUuid: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePlanInput = {
  key: Scalars['String'];
  placeUuid: Scalars['String'];
  plan: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePromoInput = {
  content: Array<Scalars['JSON']>;
  imageUrl: Scalars['String'];
  placeUuid: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type CreateSubjectInput = {
  content: CreateTemplatedContentInputModel;
  images: Array<Scalars['String']>;
  layerUuid: Scalars['String'];
  logo: Scalars['String'];
  logoBackgroundColor: Scalars['Color'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  schedule: Scalars['ScheduleWeek'];
  shortDescription: Scalars['String'];
};

export type CreateTemplateInput = {
  /** Image to show in templates list */
  imageUrl: Scalars['String'];
  /** Name of the template */
  name: Scalars['String'];
  /** Tabs of this template */
  tabs: Array<CreateTemplateTabInput>;
};

export type CreateTemplateTabInput = {
  /** Fields in this tab */
  fields: Array<Scalars['String']>;
  /** Name of the template */
  name: Scalars['String'];
};

export type CreateTemplatedContentInputModel = {
  tabs: Array<CreateTemplatedContentTabInputModel>;
  templateUuid: Scalars['String'];
};

export type CreateTemplatedContentTabInputModel = {
  fields: Array<Scalars['FieldModel']>;
  templateTabUuid: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  places?: InputMaybe<Array<Scalars['String']>>;
  role: Scalars['String'];
};

export type FieldsContentWithTranslationParkingFieldsModel = {
  __typename?: 'FieldsContentWithTranslationParkingFieldsModel';
  uuid: Scalars['String'];
};

export type FieldsContentWithTranslationParkingTariffsModel = {
  __typename?: 'FieldsContentWithTranslationParkingTariffsModel';
  uuid: Scalars['String'];
};

export type FieldsContentWithTranslationPlaceModel = {
  __typename?: 'FieldsContentWithTranslationPlaceModel';
  title: TextContentModel;
  uuid: Scalars['String'];
};

export type FieldsContentWithTranslationPromoModel = {
  __typename?: 'FieldsContentWithTranslationPromoModel';
  title: TextContentModel;
  uuid: Scalars['String'];
};

export type FieldsContentWithTranslationsModel = {
  __typename?: 'FieldsContentWithTranslationsModel';
  originalFields: Array<Scalars['JSON']>;
  parkingFields?: Maybe<FieldsContentWithTranslationParkingFieldsModel>;
  parkingTariffs?: Maybe<FieldsContentWithTranslationParkingTariffsModel>;
  place?: Maybe<FieldsContentWithTranslationPlaceModel>;
  promo?: Maybe<FieldsContentWithTranslationPromoModel>;
  translations: Array<FieldsTranslationModel>;
  type: Scalars['String'];
  uuid: Scalars['String'];
};

export type FieldsTranslationModel = {
  __typename?: 'FieldsTranslationModel';
  fieldsContentId: Scalars['String'];
  languageId: Scalars['String'];
  translation: Array<Scalars['JSON']>;
};

export type LanguageModel = {
  __typename?: 'LanguageModel';
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type LocalizedTemplateTabModel = {
  __typename?: 'LocalizedTemplateTabModel';
  /** Fields in this tab */
  fields: Array<Scalars['String']>;
  /** Name of the template */
  name: Scalars['String'];
  /** UUID of the template's tab */
  uuid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCity: CityLocalizedModel;
  createParking: ParkingLocalizedModel;
  createPlace: PlaceLocalizedModel;
  createPlaceLayer: PlaceLayerLocalizedModel;
  createPlaceRecommendation: PlaceRecommendationLocalizedModel;
  createPlan: Plan;
  createPromo: PromoLocalizedModel;
  createPromoPreview: PromoPreview;
  createSubject: SubjectLocalizedModel;
  createTemplate: TemplateLocalizedModel;
  createUser: UserLocalizedModel;
  movePlaceLayerDown: PlaceLayerLocalizedModel;
  movePlaceLayerUp: PlaceLayerLocalizedModel;
  movePlaceRecommendationLeft: PlaceRecommendationLocalizedModel;
  movePlaceRecommendationRight: PlaceRecommendationLocalizedModel;
  movePromoPreviewLeft: PromoPreview;
  movePromoPreviewRight: PromoPreview;
  removeAllPromoPreviewOfPlace: RemoveResponse;
  removeCity: RemoveResponse;
  removeParking: RemoveResponse;
  removePlace: RemoveResponse;
  removePlaceLayer: RemoveResponse;
  removePlaceRecommendation: RemoveResponse;
  removePlan: RemoveResponse;
  removePromo: RemoveResponse;
  removePromoPreview: RemoveResponse;
  removeSubject: RemoveResponse;
  removeUser: RemoveResponse;
  setLinkedRecsToSubject: SubjectLocalizedModel;
  setLinkedSubjectsToRecommendation: PlaceRecommendationLocalizedModel;
  updateCity: CityLocalizedModel;
  updateFieldsTranslation: FieldsTranslationModel;
  updateOriginalTextContent: TextContentModel;
  updateParking: ParkingLocalizedModel;
  updatePlace: PlaceLocalizedModel;
  updatePlaceLayer: PlaceLayerLocalizedModel;
  updatePlaceRecommendation: PlaceRecommendationLocalizedModel;
  updatePlan: Plan;
  updatePromo: PromoLocalizedModel;
  updatePromoPreview: PromoPreview;
  updateSubject: SubjectLocalizedModel;
  updateTemplate: TemplateLocalizedModel;
  updateTextTranslation: TextTranslationModel;
  updateUser: UserLocalizedModel;
  uploadImage: UploadResult;
};


export type MutationCreateCityArgs = {
  createCityInput: CreateCityInput;
};


export type MutationCreateParkingArgs = {
  createParkingInput: CreateParkingInput;
};


export type MutationCreatePlaceArgs = {
  createPlaceInput: CreatePlaceInput;
};


export type MutationCreatePlaceLayerArgs = {
  createPlaceLayerInput: CreatePlaceLayerInput;
};


export type MutationCreatePlaceRecommendationArgs = {
  createPlaceRecommendationInput: CreatePlaceRecommendationInput;
};


export type MutationCreatePlanArgs = {
  createPlanInput: CreatePlanInput;
};


export type MutationCreatePromoArgs = {
  createPromoInput: CreatePromoInput;
};


export type MutationCreatePromoPreviewArgs = {
  input: NewPromoPreviewItemInput;
  placeUuid: Scalars['String'];
};


export type MutationCreateSubjectArgs = {
  createSubjectInput: CreateSubjectInput;
};


export type MutationCreateTemplateArgs = {
  createTemplateInput: CreateTemplateInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationMovePlaceLayerDownArgs = {
  uuid: Scalars['String'];
};


export type MutationMovePlaceLayerUpArgs = {
  uuid: Scalars['String'];
};


export type MutationMovePlaceRecommendationLeftArgs = {
  uuid: Scalars['String'];
};


export type MutationMovePlaceRecommendationRightArgs = {
  uuid: Scalars['String'];
};


export type MutationMovePromoPreviewLeftArgs = {
  uuid: Scalars['String'];
};


export type MutationMovePromoPreviewRightArgs = {
  uuid: Scalars['String'];
};


export type MutationRemoveAllPromoPreviewOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type MutationRemoveCityArgs = {
  uuid: Scalars['String'];
};


export type MutationRemoveParkingArgs = {
  uuid: Scalars['String'];
};


export type MutationRemovePlaceArgs = {
  uuid: Scalars['String'];
};


export type MutationRemovePlaceLayerArgs = {
  uuid: Scalars['String'];
};


export type MutationRemovePlaceRecommendationArgs = {
  uuid: Scalars['String'];
};


export type MutationRemovePlanArgs = {
  key: Scalars['String'];
  placeUuid: Scalars['String'];
};


export type MutationRemovePromoArgs = {
  uuid: Scalars['String'];
};


export type MutationRemovePromoPreviewArgs = {
  uuid: Scalars['String'];
};


export type MutationRemoveSubjectArgs = {
  placeUuid: Scalars['String'];
  uuid: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  email: Scalars['String'];
};


export type MutationSetLinkedRecsToSubjectArgs = {
  recsUuids: Array<Scalars['String']>;
  uuid: Scalars['String'];
};


export type MutationSetLinkedSubjectsToRecommendationArgs = {
  subjectsUuids: Array<Scalars['String']>;
  uuid: Scalars['String'];
};


export type MutationUpdateCityArgs = {
  updateCityInput: UpdateCityInput;
};


export type MutationUpdateFieldsTranslationArgs = {
  input: UpdateFieldsTranslationInput;
};


export type MutationUpdateOriginalTextContentArgs = {
  updateTextContentInput: UpdateOriginalTextInput;
};


export type MutationUpdateParkingArgs = {
  updateParkingInput: UpdateParkingInput;
};


export type MutationUpdatePlaceArgs = {
  updatePlaceInput: UpdatePlaceInput;
};


export type MutationUpdatePlaceLayerArgs = {
  updatePlaceLayerInput: UpdatePlaceLayerInput;
};


export type MutationUpdatePlaceRecommendationArgs = {
  updatePlaceRecommendationInput: UpdatePlaceRecommendationInput;
};


export type MutationUpdatePlanArgs = {
  updatePlanInput: UpdatePlanInput;
};


export type MutationUpdatePromoArgs = {
  updatePromoInput: UpdatePromoInput;
};


export type MutationUpdatePromoPreviewArgs = {
  input: UpdatePromoPreviewItemInput;
  uuid: Scalars['String'];
};


export type MutationUpdateSubjectArgs = {
  placeUuid: Scalars['String'];
  updateSubjectInput: UpdateSubjectInput;
};


export type MutationUpdateTemplateArgs = {
  updateTemplateInput: UpdateTemplateInput;
};


export type MutationUpdateTextTranslationArgs = {
  input: UpdateTextTranslationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUploadImageArgs = {
  uploadInput: UploadInput;
};

export type NewPromoPreviewItemInput = {
  crossAxisCellCount: Scalars['Int'];
  imageUrl: Scalars['String'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
};

export type ParkingLocalizedModel = {
  __typename?: 'ParkingLocalizedModel';
  fields: Array<Scalars['JSON']>;
  levels: Scalars['JSON'];
  placeUuid: Scalars['String'];
  tariffs: Array<Scalars['JSON']>;
  uuid: Scalars['String'];
};

export type PlaceLayerLocalizedModel = {
  __typename?: 'PlaceLayerLocalizedModel';
  fullName: Scalars['String'];
  orderIndex: Scalars['Int'];
  shortName: Scalars['String'];
  uuid: Scalars['String'];
};

export type PlaceLocalizedModel = {
  __typename?: 'PlaceLocalizedModel';
  address: Scalars['String'];
  code: Scalars['String'];
  fields: Array<Scalars['FieldModel']>;
  images: Array<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  latitude: Scalars['Float'];
  logoUrl: Scalars['String'];
  longitude: Scalars['Float'];
  plans: Array<Plan>;
  promoPreview: Array<PromoPreview>;
  promoPreviewCrossAxisCount: Scalars['Int'];
  promos?: Maybe<Array<PromoLocalizedModel>>;
  recs: Array<PlaceRecommendationLocalizedModel>;
  schedule: Scalars['ScheduleWeek'];
  subjectsUuids?: Maybe<Array<Scalars['String']>>;
  timezone: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PlaceRecommendationLocalizedModel = {
  __typename?: 'PlaceRecommendationLocalizedModel';
  icon?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  linkedSubjects: Array<RecommendationLinkedSubjectModel>;
  orderIndex: Scalars['Int'];
  parent?: Maybe<PlaceRecommendationLocalizedModel>;
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PlaceSearchModel = {
  __typename?: 'PlaceSearchModel';
  address: Scalars['String'];
  images: Array<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  latitude: Scalars['Float'];
  logoUrl: Scalars['String'];
  longitude: Scalars['Float'];
  schedule: Scalars['ScheduleWeek'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type Plan = {
  __typename?: 'Plan';
  key: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  version: Scalars['String'];
};

export type PromoLocalizedModel = {
  __typename?: 'PromoLocalizedModel';
  content: Array<Scalars['JSON']>;
  imageUrl: Scalars['String'];
  placeUuid: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PromoPreview = {
  __typename?: 'PromoPreview';
  crossAxisCellCount: Scalars['Int'];
  imageUrl: Scalars['String'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
  uuid: Scalars['String'];
};

export type PromoSearchModel = {
  __typename?: 'PromoSearchModel';
  imageUrl: Scalars['String'];
  placeUuid: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cities: Array<CityLocalizedModel>;
  citiesOnMap: Array<CityLocalizedModel>;
  city: CityLocalizedModel;
  existingLanguages: Array<LanguageModel>;
  fieldsContentTranslationsOfPlace: Array<FieldsContentWithTranslationsModel>;
  findAllPromoPreviewOfPlace: Array<PromoPreview>;
  parking: ParkingLocalizedModel;
  parkingWithPlaceUuid?: Maybe<ParkingLocalizedModel>;
  place: PlaceLocalizedModel;
  placeLayer: PlaceLayerLocalizedModel;
  placeLayers: Array<PlaceLayerLocalizedModel>;
  placeRecommendation: PlaceRecommendationLocalizedModel;
  placeRecommendations: Array<PlaceRecommendationLocalizedModel>;
  placeWithCode: PlaceLocalizedModel;
  places: Array<PlaceLocalizedModel>;
  placesAll: Array<PlaceLocalizedModel>;
  placesOnMap: Array<PlaceLocalizedModel>;
  plan: Plan;
  plansOfPlace: Array<Plan>;
  promo: PromoLocalizedModel;
  promosOfPlace: Array<PromoLocalizedModel>;
  searchPlaces: Array<PlaceSearchModel>;
  searchPlacesAll: Array<PlaceSearchModel>;
  searchPromos: Array<PromoSearchModel>;
  searchSubjects: Array<SubjectSearchModel>;
  subject: SubjectLocalizedModel;
  subjectsOfPlace: Array<SubjectLocalizedModel>;
  template: TemplateLocalizedModel;
  templates: Array<TemplateLocalizedModel>;
  textContent: TextContentModel;
  textContentTranslationsOfPlace: Array<TextContentWithTranslationsModel>;
  user: UserLocalizedModel;
  users: Array<UserLocalizedModel>;
  validVersion: ValidVersion;
};


export type QueryCitiesOnMapArgs = {
  northeast: CoordinatesModel;
  southwest: CoordinatesModel;
};


export type QueryCityArgs = {
  uuid: Scalars['String'];
};


export type QueryFieldsContentTranslationsOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QueryFindAllPromoPreviewOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QueryParkingArgs = {
  uuid: Scalars['String'];
};


export type QueryParkingWithPlaceUuidArgs = {
  placeUuid: Scalars['String'];
};


export type QueryPlaceArgs = {
  uuid: Scalars['String'];
};


export type QueryPlaceLayerArgs = {
  uuid: Scalars['String'];
};


export type QueryPlaceLayersArgs = {
  placeUuid: Scalars['String'];
};


export type QueryPlaceRecommendationArgs = {
  uuid: Scalars['String'];
};


export type QueryPlaceRecommendationsArgs = {
  parentUuid?: InputMaybe<Scalars['String']>;
  placeUuid: Scalars['String'];
};


export type QueryPlaceWithCodeArgs = {
  code: Scalars['String'];
};


export type QueryPlacesOnMapArgs = {
  northeast: CoordinatesModel;
  southwest: CoordinatesModel;
};


export type QueryPlanArgs = {
  key: Scalars['String'];
  placeUuid: Scalars['String'];
};


export type QueryPlansOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QueryPromoArgs = {
  uuid: Scalars['String'];
};


export type QueryPromosOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QuerySearchPlacesArgs = {
  searchPlacesInput: SearchPlacesInput;
};


export type QuerySearchPlacesAllArgs = {
  searchPlacesInput: SearchPlacesInput;
};


export type QuerySearchPromosArgs = {
  searchPromosInput: SearchPromosInput;
};


export type QuerySearchSubjectsArgs = {
  searchSubjectsInput: SearchSubjectsInput;
};


export type QuerySubjectArgs = {
  placeUuid: Scalars['String'];
  uuid: Scalars['String'];
};


export type QuerySubjectsOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QueryTemplateArgs = {
  uuid: Scalars['String'];
};


export type QueryTextContentArgs = {
  uuid: Scalars['String'];
};


export type QueryTextContentTranslationsOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QueryUserArgs = {
  email: Scalars['String'];
};


export type QueryValidVersionArgs = {
  input: ValidVersionInput;
};

export type RecommendationLinkedSubjectModel = {
  __typename?: 'RecommendationLinkedSubjectModel';
  name: Scalars['String'];
  uuid: Scalars['String'];
};

export type RemoveResponse = {
  __typename?: 'RemoveResponse';
  removed: Scalars['Boolean'];
};

export type SearchPlacesInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
};

export type SearchPromosInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  placeUuid?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
};

export type SearchSubjectsInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  placeUuid?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  rec?: InputMaybe<Scalars['String']>;
};

export type SubjectLocalizedModel = {
  __typename?: 'SubjectLocalizedModel';
  content?: Maybe<TemplatedContentLocalizedModel>;
  images: Array<Scalars['String']>;
  layerName: Scalars['String'];
  layerUuid: Scalars['String'];
  logoBackgroundColor: Scalars['Color'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  recs?: Maybe<Array<PlaceRecommendationLocalizedModel>>;
  schedule: Scalars['ScheduleWeek'];
  shortDescription: Scalars['String'];
  uuid: Scalars['String'];
};

export type SubjectSearchModel = {
  __typename?: 'SubjectSearchModel';
  images: Array<Scalars['String']>;
  layerUuid: Scalars['String'];
  logoBackgroundColor: Scalars['Color'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  schedule: Scalars['ScheduleWeek'];
  shortDescription: Scalars['String'];
  uuid: Scalars['String'];
};

export type TemplateLocalizedModel = {
  __typename?: 'TemplateLocalizedModel';
  /** Image to show in templates list */
  imageUrl: Scalars['String'];
  /** Name of the template */
  name: Scalars['String'];
  /** Tabs of this template */
  tabs: Array<LocalizedTemplateTabModel>;
  /** UUID of the template */
  uuid: Scalars['String'];
};

export type TemplatedContentLocalizedModel = {
  __typename?: 'TemplatedContentLocalizedModel';
  tabs: Array<TemplatedContentTabLocalizedModel>;
  templateUuid: Scalars['String'];
};

export type TemplatedContentTabLocalizedModel = {
  __typename?: 'TemplatedContentTabLocalizedModel';
  fields: Array<Scalars['FieldModel']>;
  name: Scalars['String'];
  templateTabUuid: Scalars['String'];
};

export type TextContentModel = {
  __typename?: 'TextContentModel';
  originalText: Scalars['String'];
  uuid: Scalars['String'];
};

export type TextContentWithTranslationsModel = {
  __typename?: 'TextContentWithTranslationsModel';
  originalText: Scalars['String'];
  translations: Array<TextTranslationModel>;
  uuid: Scalars['String'];
};

export type TextTranslationModel = {
  __typename?: 'TextTranslationModel';
  languageId: Scalars['String'];
  textContentId: Scalars['String'];
  translation: Scalars['String'];
};

export type UpdateCityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type UpdateFieldsTranslationInput = {
  fieldsContentId: Scalars['String'];
  locale: Scalars['String'];
  translation: Array<Scalars['JSON']>;
};

export type UpdateOriginalTextInput = {
  originalText: Scalars['String'];
  uuid: Scalars['String'];
};

export type UpdateParkingInput = {
  fields: Array<Scalars['JSON']>;
  levels: Scalars['JSON'];
  tariffs: Array<Scalars['JSON']>;
  uuid: Scalars['String'];
};

export type UpdatePlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  isVisible?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  promoPreviewCrossAxisCount?: InputMaybe<Scalars['Int']>;
  schedule?: InputMaybe<Scalars['ScheduleWeek']>;
  timezone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type UpdatePlaceLayerInput = {
  fullName: Scalars['String'];
  placeUuid?: InputMaybe<Scalars['String']>;
  shortName: Scalars['String'];
  uuid: Scalars['String'];
};

export type UpdatePlaceRecommendationInput = {
  icon?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  parentUuid?: InputMaybe<Scalars['String']>;
  placeUuid?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type UpdatePlanInput = {
  key: Scalars['String'];
  placeUuid: Scalars['String'];
  plan?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePromoInput = {
  content?: InputMaybe<Array<Scalars['JSON']>>;
  imageUrl?: InputMaybe<Scalars['String']>;
  placeUuid?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type UpdatePromoPreviewItemInput = {
  crossAxisCellCount?: InputMaybe<Scalars['Int']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  mainAxisCellCount?: InputMaybe<Scalars['Int']>;
  promoUuid?: InputMaybe<Scalars['String']>;
};

export type UpdateSubjectInput = {
  content?: InputMaybe<CreateTemplatedContentInputModel>;
  images?: InputMaybe<Array<Scalars['String']>>;
  layerUuid?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  logoBackgroundColor?: InputMaybe<Scalars['Color']>;
  name?: InputMaybe<Scalars['String']>;
  schedule?: InputMaybe<Scalars['ScheduleWeek']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type UpdateTemplateInput = {
  /** Image to show in templates list */
  imageUrl: Scalars['String'];
  /** UUID of the template */
  uuid: Scalars['String'];
};

export type UpdateTextTranslationInput = {
  locale: Scalars['String'];
  textContentId: Scalars['String'];
  translation: Scalars['String'];
};

export type UpdateUserInput = {
  addPlaces?: InputMaybe<Array<Scalars['String']>>;
  email?: InputMaybe<Scalars['String']>;
  mustChangePassword?: InputMaybe<Scalars['Boolean']>;
  places?: InputMaybe<Array<Scalars['String']>>;
  removePlaces?: InputMaybe<Array<Scalars['String']>>;
  role?: InputMaybe<Scalars['String']>;
};

export type UploadInput = {
  /** file to upload encoded in base64 */
  base64EncodedData: Scalars['String'];
  /** uuid of place this file relies to */
  placeUuid: Scalars['String'];
};

export type UploadResult = {
  __typename?: 'UploadResult';
  /** Url of stored file */
  url: Scalars['String'];
};

export type UserConnectedPlace = {
  __typename?: 'UserConnectedPlace';
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type UserLocalizedModel = {
  __typename?: 'UserLocalizedModel';
  connectedPlaces: Array<UserConnectedPlace>;
  email: Scalars['String'];
  mustChangePassword: Scalars['Boolean'];
  role: Scalars['String'];
};

export type ValidVersion = {
  __typename?: 'ValidVersion';
  /** If this app version is valid */
  versionValid: Scalars['Boolean'];
};

export type ValidVersionInput = {
  /** Platform of app (android/ios) */
  platform: Scalars['String'];
  /** Number of app version (ex 2.0.0) */
  versionNumber: Scalars['String'];
};

export type UploadImageMutationVariables = Exact<{
  uploadInput: UploadInput;
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage: { __typename?: 'UploadResult', url: string } };

export type GetListOfPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListOfPlacesQuery = { __typename?: 'Query', places: Array<{ __typename?: 'PlaceLocalizedModel', uuid: string, title: string, logoUrl: string }> };

export type GetPlaceQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place: { __typename?: 'PlaceLocalizedModel', title: string, logoUrl: string, address: string, schedule: any, recs: Array<{ __typename?: 'PlaceRecommendationLocalizedModel', title: string }>, promos?: Array<{ __typename?: 'PromoLocalizedModel', title: string }> | null } };

export type GetPlaceLayersQueryVariables = Exact<{
  placeUuid: Scalars['String'];
}>;


export type GetPlaceLayersQuery = { __typename?: 'Query', placeLayers: Array<{ __typename?: 'PlaceLayerLocalizedModel', uuid: string, fullName: string }> };

export type CreatePromoMutationVariables = Exact<{
  createPromoInput: CreatePromoInput;
}>;


export type CreatePromoMutation = { __typename?: 'Mutation', createPromo: { __typename?: 'PromoLocalizedModel', uuid: string, imageUrl: string } };

export type GetListOfPromosQueryVariables = Exact<{
  placeUuid: Scalars['String'];
}>;


export type GetListOfPromosQuery = { __typename?: 'Query', promosOfPlace: Array<{ __typename?: 'PromoLocalizedModel', uuid: string, title: string, imageUrl: string, subtitle: string }> };

export type CreateSubjectMutationVariables = Exact<{
  createSubjectInput: CreateSubjectInput;
}>;


export type CreateSubjectMutation = { __typename?: 'Mutation', createSubject: { __typename?: 'SubjectLocalizedModel', uuid: string } };

export type DeleteSubjectMutationVariables = Exact<{
  uuid: Scalars['String'];
  placeUuid: Scalars['String'];
}>;


export type DeleteSubjectMutation = { __typename?: 'Mutation', removeSubject: { __typename?: 'RemoveResponse', removed: boolean } };

export type GetSubjectsOfPlaceQueryVariables = Exact<{
  placeUuid: Scalars['String'];
}>;


export type GetSubjectsOfPlaceQuery = { __typename?: 'Query', subjectsOfPlace: Array<{ __typename?: 'SubjectLocalizedModel', uuid: string, name: string, layerName: string, logoUrl: string, logoBackgroundColor: any, shortDescription: string, images: Array<string> }> };

export type GetSubjectsByIdQueryVariables = Exact<{
  uuid: Scalars['String'];
  placeUuid: Scalars['String'];
}>;


export type GetSubjectsByIdQuery = { __typename?: 'Query', subject: { __typename?: 'SubjectLocalizedModel', uuid: string, name: string, placeUuid: string, layerUuid: string, layerName: string, logoUrl: string, logoBackgroundColor: any, shortDescription: string, images: Array<string>, content?: { __typename?: 'TemplatedContentLocalizedModel', templateUuid: string, tabs: Array<{ __typename?: 'TemplatedContentTabLocalizedModel', templateTabUuid: string, name: string, fields: Array<any> }> } | null } };


export const UploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uploadInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UploadImageMutation, UploadImageMutationVariables>;
export const GetListOfPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListOfPlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]}}]} as unknown as DocumentNode<GetListOfPlacesQuery, GetListOfPlacesQueryVariables>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"recs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
export const GetPlaceLayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlaceLayers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeLayers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<GetPlaceLayersQuery, GetPlaceLayersQueryVariables>;
export const CreatePromoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePromo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPromoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePromoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPromo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPromoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPromoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<CreatePromoMutation, CreatePromoMutationVariables>;
export const GetListOfPromosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListOfPromos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promosOfPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}}]}}]} as unknown as DocumentNode<GetListOfPromosQuery, GetListOfPromosQueryVariables>;
export const CreateSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubjectInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}}]}}]} as unknown as DocumentNode<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const DeleteSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}}]}}]} as unknown as DocumentNode<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const GetSubjectsOfPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjectsOfPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subjectsOfPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layerName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"logoBackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<GetSubjectsOfPlaceQuery, GetSubjectsOfPlaceQueryVariables>;
export const GetSubjectsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjectsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"placeUuid"}},{"kind":"Field","name":{"kind":"Name","value":"layerUuid"}},{"kind":"Field","name":{"kind":"Name","value":"layerName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"logoBackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateUuid"}},{"kind":"Field","name":{"kind":"Name","value":"tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateTabUuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSubjectsByIdQuery, GetSubjectsByIdQueryVariables>;