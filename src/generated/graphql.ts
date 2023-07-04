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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
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

export type CreatePlaceInput = {
  address: Scalars['String'];
  code: Scalars['String'];
  latitude: Scalars['Float'];
  logoEncoded: Scalars['String'];
  longitude: Scalars['Float'];
  schedule: Scalars['JSON'];
  timezone: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePlaceLayerInput = {
  fullName: Scalars['String'];
  placeUuid: Scalars['String'];
  shortName: Scalars['String'];
};

export type CreatePlaceRecommendationInput = {
  icon: Scalars['String'];
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
  baseEncodedImage: Scalars['String'];
  content: Array<Scalars['JSON']>;
  placeUuid: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type CreateSubjectInput = {
  fields: Array<Scalars['JSON']>;
  images: Array<UploadImageModel>;
  layerUuid: Scalars['String'];
  logo: Scalars['String'];
  logoBackgroundColor: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  schedule: Scalars['JSON'];
  shortDescription: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  places?: InputMaybe<Array<Scalars['String']>>;
  role: Scalars['String'];
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

export type FieldsContentWithTranslationSubjectModel = {
  __typename?: 'FieldsContentWithTranslationSubjectModel';
  name: TextContentModel;
  uuid: Scalars['String'];
};

export type FieldsContentWithTranslationsModel = {
  __typename?: 'FieldsContentWithTranslationsModel';
  originalFields: Array<Scalars['JSON']>;
  place?: Maybe<FieldsContentWithTranslationPlaceModel>;
  promo?: Maybe<FieldsContentWithTranslationPromoModel>;
  subject?: Maybe<FieldsContentWithTranslationSubjectModel>;
  translations: Array<FieldsTranslationModel>;
  uuid: Scalars['String'];
};

export type FieldsTranslationModel = {
  __typename?: 'FieldsTranslationModel';
  fieldsContentId: Scalars['String'];
  languageId: Scalars['String'];
  translation: Array<Scalars['JSON']>;
};

export type ImageModel = {
  __typename?: 'ImageModel';
  cloudinaryId: Scalars['String'];
  url: Scalars['String'];
  uuid: Scalars['String'];
};

export type LanguageModel = {
  __typename?: 'LanguageModel';
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCity: CityLocalizedModel;
  createPlace: PlaceLocalizedModel;
  createPlaceLayer: PlaceLayerLocalizedModel;
  createPlaceRecommendation: PlaceRecommendationLocalizedModel;
  createPlan: Plan;
  createPromo: PromoLocalizedModel;
  createPromoPreview: PromoPreview;
  createSubject: SubjectLocalizedModel;
  createUser: UserLocalizedModel;
  movePlaceLayerDown: PlaceLayerLocalizedModel;
  movePlaceLayerUp: PlaceLayerLocalizedModel;
  movePlaceRecommendationLeft: PlaceRecommendationLocalizedModel;
  movePlaceRecommendationRight: PlaceRecommendationLocalizedModel;
  movePromoPreviewLeft: PromoPreview;
  movePromoPreviewRight: PromoPreview;
  removeAllPromoPreviewOfPlace: Array<PromoPreview>;
  removeCity: Scalars['String'];
  removePlace: PlaceLocalizedModel;
  removePlaceLayer: PlaceLayerLocalizedModel;
  removePlaceRecommendation: Scalars['String'];
  removePlan: Plan;
  removePromo: PromoLocalizedModel;
  removePromoPreview: PromoPreview;
  removeSubject: Scalars['String'];
  removeUser: UserLocalizedModel;
  setLinkedRecsToSubject: SubjectLocalizedModel;
  setLinkedSubjectsToRecommendation: PlaceRecommendationLocalizedModel;
  updateCity: CityLocalizedModel;
  updateFieldsTranslation: FieldsTranslationModel;
  updateOriginalTextContent: TextContentModel;
  updatePlace: PlaceLocalizedModel;
  updatePlaceLayer: PlaceLayerLocalizedModel;
  updatePlaceRecommendation: PlaceRecommendationLocalizedModel;
  updatePlan: Plan;
  updatePromo: PromoLocalizedModel;
  updatePromoPreview: PromoPreview;
  updateSubject: SubjectLocalizedModel;
  updateTextTranslation: TextTranslationModel;
  updateUser: UserLocalizedModel;
};


export type MutationCreateCityArgs = {
  createCityInput: CreateCityInput;
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


export type MutationUpdateTextTranslationArgs = {
  input: UpdateTextTranslationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type NewPromoPreviewItemInput = {
  baseEncodedImage: Scalars['String'];
  crossAxisCellCount: Scalars['Int'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
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
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  isVisible: Scalars['Boolean'];
  latitude: Scalars['Float'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  longitude: Scalars['Float'];
  plans: Array<Plan>;
  promoPreview: Array<PromoPreview>;
  promoPreviewCrossAxisCount: Scalars['Int'];
  promos?: Maybe<Array<PromoLocalizedModel>>;
  recs: Array<PlaceRecommendationLocalizedModel>;
  schedule: Scalars['JSON'];
  subjectsUuids?: Maybe<Array<Scalars['String']>>;
  timezone: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PlaceRecommendationLocalizedModel = {
  __typename?: 'PlaceRecommendationLocalizedModel';
  icon: Scalars['String'];
  linkedSubjects: Array<RecommendationLinkedSubjectModel>;
  orderIndex: Scalars['Int'];
  parent?: Maybe<PlaceRecommendationLocalizedModel>;
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
  imageCloudinaryId: Scalars['String'];
  imageUrl: Scalars['String'];
  placeUuid: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PromoPreview = {
  __typename?: 'PromoPreview';
  crossAxisCellCount: Scalars['Int'];
  imageCloudinaryId: Scalars['String'];
  imageUrl: Scalars['String'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
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
  searchPlaces: Array<PlaceLocalizedModel>;
  searchSubjects: Array<SubjectLocalizedModel>;
  subject: SubjectLocalizedModel;
  subjectsOfPlace: Array<SubjectLocalizedModel>;
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
  query: Scalars['String'];
};


export type QuerySearchSubjectsArgs = {
  placeUuid: Scalars['String'];
  query?: InputMaybe<Scalars['String']>;
  rec?: InputMaybe<Scalars['String']>;
};


export type QuerySubjectArgs = {
  placeUuid: Scalars['String'];
  uuid: Scalars['String'];
};


export type QuerySubjectsOfPlaceArgs = {
  placeUuid: Scalars['String'];
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

export type SubjectLocalizedModel = {
  __typename?: 'SubjectLocalizedModel';
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  layerName: Scalars['String'];
  layerUuid: Scalars['String'];
  logoBackgroundColor: Scalars['String'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  recs?: Maybe<Array<PlaceRecommendationLocalizedModel>>;
  schedule: Scalars['JSON'];
  shortDescription: Scalars['String'];
  uuid: Scalars['String'];
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

export type UpdatePlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Scalars['JSON']>;
  imagesOrder?: InputMaybe<Array<Scalars['String']>>;
  imagesToDelete?: InputMaybe<Array<Scalars['String']>>;
  imagesToUpload?: InputMaybe<Array<UploadImageModel>>;
  latitude?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['String']>;
  logoEncoded?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  promoPreviewCrossAxisCount?: InputMaybe<Scalars['Int']>;
  schedule?: InputMaybe<Scalars['JSON']>;
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
  baseEncodedImage?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Array<Scalars['JSON']>>;
  placeUuid?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type UpdatePromoPreviewItemInput = {
  baseEncodedImage?: InputMaybe<Scalars['String']>;
  crossAxisCellCount?: InputMaybe<Scalars['Int']>;
  mainAxisCellCount?: InputMaybe<Scalars['Int']>;
  promoUuid?: InputMaybe<Scalars['String']>;
};

export type UpdateSubjectInput = {
  fields?: InputMaybe<Scalars['JSON']>;
  imagesOrder?: InputMaybe<Array<Scalars['String']>>;
  imagesToDelete?: InputMaybe<Array<Scalars['String']>>;
  imagesToUpload?: InputMaybe<Array<UploadImageModel>>;
  layerUuid?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  logoBackgroundColor?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schedule?: InputMaybe<Scalars['JSON']>;
  shortDescription?: InputMaybe<Scalars['String']>;
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

export type UploadImageModel = {
  baseEncodedImage: Scalars['String'];
  uuid: Scalars['String'];
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

export type GetSubjectsOfPlaceQueryVariables = Exact<{
  placeUuid: Scalars['String'];
}>;


export type GetSubjectsOfPlaceQuery = { __typename?: 'Query', subjectsOfPlace: Array<{ __typename?: 'SubjectLocalizedModel', uuid: string, name: string, layerName: string, logoUrl: string, logoBackgroundColor: string, images?: Array<{ __typename?: 'ImageModel', uuid: string, url: string, cloudinaryId: string }> | null }> };

export type CreateSubjectMutationVariables = Exact<{
  createSubjectInput: CreateSubjectInput;
}>;


export type CreateSubjectMutation = { __typename?: 'Mutation', createSubject: { __typename?: 'SubjectLocalizedModel', uuid: string } };


export const GetListOfPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListOfPlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]}}]} as unknown as DocumentNode<GetListOfPlacesQuery, GetListOfPlacesQueryVariables>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"recs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
export const GetPlaceLayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlaceLayers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeLayers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<GetPlaceLayersQuery, GetPlaceLayersQueryVariables>;
export const GetSubjectsOfPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjectsOfPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subjectsOfPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layerName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"logoBackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryId"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubjectsOfPlaceQuery, GetSubjectsOfPlaceQueryVariables>;
export const CreateSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubjectInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}}]}}]} as unknown as DocumentNode<CreateSubjectMutation, CreateSubjectMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
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

export type CreatePlaceInput = {
  address: Scalars['String'];
  code: Scalars['String'];
  latitude: Scalars['Float'];
  logoEncoded: Scalars['String'];
  longitude: Scalars['Float'];
  schedule: Scalars['JSON'];
  timezone: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePlaceLayerInput = {
  fullName: Scalars['String'];
  placeUuid: Scalars['String'];
  shortName: Scalars['String'];
};

export type CreatePlaceRecommendationInput = {
  icon: Scalars['String'];
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
  baseEncodedImage: Scalars['String'];
  content: Array<Scalars['JSON']>;
  placeUuid: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type CreateSubjectInput = {
  fields: Array<Scalars['JSON']>;
  images: Array<UploadImageModel>;
  layerUuid: Scalars['String'];
  logo: Scalars['String'];
  logoBackgroundColor: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  schedule: Scalars['JSON'];
  shortDescription: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  places?: InputMaybe<Array<Scalars['String']>>;
  role: Scalars['String'];
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

export type FieldsContentWithTranslationSubjectModel = {
  __typename?: 'FieldsContentWithTranslationSubjectModel';
  name: TextContentModel;
  uuid: Scalars['String'];
};

export type FieldsContentWithTranslationsModel = {
  __typename?: 'FieldsContentWithTranslationsModel';
  originalFields: Array<Scalars['JSON']>;
  place?: Maybe<FieldsContentWithTranslationPlaceModel>;
  promo?: Maybe<FieldsContentWithTranslationPromoModel>;
  subject?: Maybe<FieldsContentWithTranslationSubjectModel>;
  translations: Array<FieldsTranslationModel>;
  uuid: Scalars['String'];
};

export type FieldsTranslationModel = {
  __typename?: 'FieldsTranslationModel';
  fieldsContentId: Scalars['String'];
  languageId: Scalars['String'];
  translation: Array<Scalars['JSON']>;
};

export type ImageModel = {
  __typename?: 'ImageModel';
  cloudinaryId: Scalars['String'];
  url: Scalars['String'];
  uuid: Scalars['String'];
};

export type LanguageModel = {
  __typename?: 'LanguageModel';
  locale: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCity: CityLocalizedModel;
  createPlace: PlaceLocalizedModel;
  createPlaceLayer: PlaceLayerLocalizedModel;
  createPlaceRecommendation: PlaceRecommendationLocalizedModel;
  createPlan: Plan;
  createPromo: PromoLocalizedModel;
  createPromoPreview: PromoPreview;
  createSubject: SubjectLocalizedModel;
  createUser: UserLocalizedModel;
  movePlaceLayerDown: PlaceLayerLocalizedModel;
  movePlaceLayerUp: PlaceLayerLocalizedModel;
  movePlaceRecommendationLeft: PlaceRecommendationLocalizedModel;
  movePlaceRecommendationRight: PlaceRecommendationLocalizedModel;
  movePromoPreviewLeft: PromoPreview;
  movePromoPreviewRight: PromoPreview;
  removeAllPromoPreviewOfPlace: Array<PromoPreview>;
  removeCity: Scalars['String'];
  removePlace: PlaceLocalizedModel;
  removePlaceLayer: PlaceLayerLocalizedModel;
  removePlaceRecommendation: Scalars['String'];
  removePlan: Plan;
  removePromo: PromoLocalizedModel;
  removePromoPreview: PromoPreview;
  removeSubject: Scalars['String'];
  removeUser: UserLocalizedModel;
  setLinkedRecsToSubject: SubjectLocalizedModel;
  setLinkedSubjectsToRecommendation: PlaceRecommendationLocalizedModel;
  updateCity: CityLocalizedModel;
  updateFieldsTranslation: FieldsTranslationModel;
  updateOriginalTextContent: TextContentModel;
  updatePlace: PlaceLocalizedModel;
  updatePlaceLayer: PlaceLayerLocalizedModel;
  updatePlaceRecommendation: PlaceRecommendationLocalizedModel;
  updatePlan: Plan;
  updatePromo: PromoLocalizedModel;
  updatePromoPreview: PromoPreview;
  updateSubject: SubjectLocalizedModel;
  updateTextTranslation: TextTranslationModel;
  updateUser: UserLocalizedModel;
};


export type MutationCreateCityArgs = {
  createCityInput: CreateCityInput;
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


export type MutationUpdateTextTranslationArgs = {
  input: UpdateTextTranslationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type NewPromoPreviewItemInput = {
  baseEncodedImage: Scalars['String'];
  crossAxisCellCount: Scalars['Int'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
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
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  isVisible: Scalars['Boolean'];
  latitude: Scalars['Float'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  longitude: Scalars['Float'];
  plans: Array<Plan>;
  promoPreview: Array<PromoPreview>;
  promoPreviewCrossAxisCount: Scalars['Int'];
  promos?: Maybe<Array<PromoLocalizedModel>>;
  recs: Array<PlaceRecommendationLocalizedModel>;
  schedule: Scalars['JSON'];
  subjectsUuids?: Maybe<Array<Scalars['String']>>;
  timezone: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PlaceRecommendationLocalizedModel = {
  __typename?: 'PlaceRecommendationLocalizedModel';
  icon: Scalars['String'];
  linkedSubjects: Array<RecommendationLinkedSubjectModel>;
  orderIndex: Scalars['Int'];
  parent?: Maybe<PlaceRecommendationLocalizedModel>;
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
  imageCloudinaryId: Scalars['String'];
  imageUrl: Scalars['String'];
  placeUuid: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PromoPreview = {
  __typename?: 'PromoPreview';
  crossAxisCellCount: Scalars['Int'];
  imageCloudinaryId: Scalars['String'];
  imageUrl: Scalars['String'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
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
  searchPlaces: Array<PlaceLocalizedModel>;
  searchSubjects: Array<SubjectLocalizedModel>;
  subject: SubjectLocalizedModel;
  subjectsOfPlace: Array<SubjectLocalizedModel>;
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
  query: Scalars['String'];
};


export type QuerySearchSubjectsArgs = {
  placeUuid: Scalars['String'];
  query?: InputMaybe<Scalars['String']>;
  rec?: InputMaybe<Scalars['String']>;
};


export type QuerySubjectArgs = {
  placeUuid: Scalars['String'];
  uuid: Scalars['String'];
};


export type QuerySubjectsOfPlaceArgs = {
  placeUuid: Scalars['String'];
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

export type SubjectLocalizedModel = {
  __typename?: 'SubjectLocalizedModel';
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  layerName: Scalars['String'];
  layerUuid: Scalars['String'];
  logoBackgroundColor: Scalars['String'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  recs?: Maybe<Array<PlaceRecommendationLocalizedModel>>;
  schedule: Scalars['JSON'];
  shortDescription: Scalars['String'];
  uuid: Scalars['String'];
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

export type UpdatePlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Scalars['JSON']>;
  imagesOrder?: InputMaybe<Array<Scalars['String']>>;
  imagesToDelete?: InputMaybe<Array<Scalars['String']>>;
  imagesToUpload?: InputMaybe<Array<UploadImageModel>>;
  latitude?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['String']>;
  logoEncoded?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  promoPreviewCrossAxisCount?: InputMaybe<Scalars['Int']>;
  schedule?: InputMaybe<Scalars['JSON']>;
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
  baseEncodedImage?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Array<Scalars['JSON']>>;
  placeUuid?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};

export type UpdatePromoPreviewItemInput = {
  baseEncodedImage?: InputMaybe<Scalars['String']>;
  crossAxisCellCount?: InputMaybe<Scalars['Int']>;
  mainAxisCellCount?: InputMaybe<Scalars['Int']>;
  promoUuid?: InputMaybe<Scalars['String']>;
};

export type UpdateSubjectInput = {
  fields?: InputMaybe<Scalars['JSON']>;
  imagesOrder?: InputMaybe<Array<Scalars['String']>>;
  imagesToDelete?: InputMaybe<Array<Scalars['String']>>;
  imagesToUpload?: InputMaybe<Array<UploadImageModel>>;
  layerUuid?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  logoBackgroundColor?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schedule?: InputMaybe<Scalars['JSON']>;
  shortDescription?: InputMaybe<Scalars['String']>;
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

export type UploadImageModel = {
  baseEncodedImage: Scalars['String'];
  uuid: Scalars['String'];
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

export type GetSubjectsOfPlaceQueryVariables = Exact<{
  placeUuid: Scalars['String'];
}>;


export type GetSubjectsOfPlaceQuery = { __typename?: 'Query', subjectsOfPlace: Array<{ __typename?: 'SubjectLocalizedModel', uuid: string, name: string, layerName: string, logoUrl: string, logoBackgroundColor: string, images?: Array<{ __typename?: 'ImageModel', uuid: string, url: string, cloudinaryId: string }> | null }> };

export type CreateSubjectMutationVariables = Exact<{
  createSubjectInput: CreateSubjectInput;
}>;


export type CreateSubjectMutation = { __typename?: 'Mutation', createSubject: { __typename?: 'SubjectLocalizedModel', uuid: string } };
