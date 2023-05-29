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

export type City = {
  __typename?: 'City';
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
  uuid: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  places?: InputMaybe<Array<Scalars['String']>>;
  role: Scalars['String'];
};

export type ImageModel = {
  __typename?: 'ImageModel';
  cloudinaryId: Scalars['String'];
  url: Scalars['String'];
  uuid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCity: City;
  createPlace: PlaceModel;
  createPlaceRecommendation: PlaceRecommendation;
  createPlan: Plan;
  createPromo: Promo;
  createPromoPreview: PromoPreview;
  createSubject: SubjectModel;
  createUser: UserModel;
  movePlaceRecommendationLeft: PlaceRecommendation;
  movePlaceRecommendationRight: PlaceRecommendation;
  movePromoPreviewLeft: PromoPreview;
  movePromoPreviewRight: PromoPreview;
  removeAllPromoPreviewOfPlace: Array<PromoPreview>;
  removeCity: City;
  removePlace: PlaceModel;
  removePlaceRecommendation: PlaceRecommendation;
  removePlan: Plan;
  removePromo: Promo;
  removePromoPreview: PromoPreview;
  removeSubject: SubjectModel;
  removeUser: UserModel;
  setLinkedRecsToSubject: SubjectModel;
  setLinkedSubjectsToRecommendation: PlaceRecommendation;
  updateCity: City;
  updatePlace: PlaceModel;
  updatePlaceRecommendation: PlaceRecommendation;
  updatePlan: Plan;
  updatePromo: Promo;
  updatePromoPreview: PromoPreview;
  updateSubject: SubjectModel;
  updateUser: UserModel;
};


export type MutationCreateCityArgs = {
  createCityInput: CreateCityInput;
};


export type MutationCreatePlaceArgs = {
  createPlaceInput: CreatePlaceInput;
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


export type MutationUpdatePlaceArgs = {
  updatePlaceInput: UpdatePlaceInput;
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


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type NewPromoPreviewItemInput = {
  baseEncodedImage: Scalars['String'];
  crossAxisCellCount: Scalars['Int'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
};

export type PlaceModel = {
  __typename?: 'PlaceModel';
  address: Scalars['String'];
  code: Scalars['String'];
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  latitude: Scalars['Float'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  longitude: Scalars['Float'];
  plans: Array<Plan>;
  promoPreview: Array<PromoPreview>;
  promoPreviewCrossAxisCount: Scalars['Int'];
  promos?: Maybe<Array<Promo>>;
  recs: Array<PlaceRecommendation>;
  schedule: Scalars['JSON'];
  subjects?: Maybe<Array<SubjectModel>>;
  timezone: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PlaceRecommendation = {
  __typename?: 'PlaceRecommendation';
  children: Array<PlaceRecommendation>;
  icon: Scalars['String'];
  linkedSubjects: Array<SubjectModel>;
  orderIndex: Scalars['Int'];
  parent?: Maybe<PlaceRecommendation>;
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

export type Promo = {
  __typename?: 'Promo';
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
  cities: Array<City>;
  citiesOnMap: Array<City>;
  city: City;
  findAllPromoPreviewOfPlace: Array<PromoPreview>;
  place: PlaceModel;
  placeRecommendation: PlaceRecommendation;
  placeRecommendations: Array<PlaceRecommendation>;
  placeWithCode: PlaceModel;
  places: Array<PlaceModel>;
  placesOnMap: Array<PlaceModel>;
  plan: Plan;
  plansOfPlace: Array<Plan>;
  promo: Promo;
  promosOfPlace: Array<Promo>;
  searchPlaces: Array<PlaceModel>;
  searchSubjects: Array<SubjectModel>;
  subject: SubjectModel;
  subjectsOfPlace: Array<SubjectModel>;
  user: UserModel;
  users: Array<UserModel>;
};


export type QueryCitiesOnMapArgs = {
  northeast: CoordinatesModel;
  southwest: CoordinatesModel;
};


export type QueryCityArgs = {
  uuid: Scalars['String'];
};


export type QueryFindAllPromoPreviewOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QueryPlaceArgs = {
  uuid: Scalars['String'];
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


export type QueryUserArgs = {
  email: Scalars['String'];
};

export type SubjectModel = {
  __typename?: 'SubjectModel';
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  layerUuid: Scalars['String'];
  logoBackgroundColor: Scalars['String'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  recs?: Maybe<Array<PlaceRecommendation>>;
  schedule: Scalars['JSON'];
  shortDescription: Scalars['String'];
  uuid: Scalars['String'];
};

export type UpdateCityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
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

export type UserModel = {
  __typename?: 'UserModel';
  email: Scalars['String'];
  mustChangePassword: Scalars['Boolean'];
  places: Array<PlaceModel>;
  role: Scalars['String'];
};

export type GetListOfPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListOfPlacesQuery = { __typename?: 'Query', places: Array<{ __typename?: 'PlaceModel', uuid: string, title: string, logoUrl: string }> };

export type GetPlaceQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place: { __typename?: 'PlaceModel', title: string, logoUrl: string, address: string, schedule: any, recs: Array<{ __typename?: 'PlaceRecommendation', title: string }>, promos?: Array<{ __typename?: 'Promo', title: string }> | null } };

export type GetSubjectsOfPlaceQueryVariables = Exact<{
  placeUuid: Scalars['String'];
}>;


export type GetSubjectsOfPlaceQuery = { __typename?: 'Query', subjectsOfPlace: Array<{ __typename?: 'SubjectModel', uuid: string, name: string, layerUuid: string, logoUrl: string, logoBackgroundColor: string, images?: Array<{ __typename?: 'ImageModel', uuid: string, url: string, cloudinaryId: string }> | null }> };


export const GetListOfPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListOfPlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]}}]} as unknown as DocumentNode<GetListOfPlacesQuery, GetListOfPlacesQueryVariables>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"recs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
export const GetSubjectsOfPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjectsOfPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subjectsOfPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layerUuid"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"logoBackgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"cloudinaryId"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubjectsOfPlaceQuery, GetSubjectsOfPlaceQueryVariables>;
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

export type City = {
  __typename?: 'City';
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
  uuid: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  places?: InputMaybe<Array<Scalars['String']>>;
  role: Scalars['String'];
};

export type ImageModel = {
  __typename?: 'ImageModel';
  cloudinaryId: Scalars['String'];
  url: Scalars['String'];
  uuid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCity: City;
  createPlace: PlaceModel;
  createPlaceRecommendation: PlaceRecommendation;
  createPlan: Plan;
  createPromo: Promo;
  createPromoPreview: PromoPreview;
  createSubject: SubjectModel;
  createUser: UserModel;
  movePlaceRecommendationLeft: PlaceRecommendation;
  movePlaceRecommendationRight: PlaceRecommendation;
  movePromoPreviewLeft: PromoPreview;
  movePromoPreviewRight: PromoPreview;
  removeAllPromoPreviewOfPlace: Array<PromoPreview>;
  removeCity: City;
  removePlace: PlaceModel;
  removePlaceRecommendation: PlaceRecommendation;
  removePlan: Plan;
  removePromo: Promo;
  removePromoPreview: PromoPreview;
  removeSubject: SubjectModel;
  removeUser: UserModel;
  setLinkedRecsToSubject: SubjectModel;
  setLinkedSubjectsToRecommendation: PlaceRecommendation;
  updateCity: City;
  updatePlace: PlaceModel;
  updatePlaceRecommendation: PlaceRecommendation;
  updatePlan: Plan;
  updatePromo: Promo;
  updatePromoPreview: PromoPreview;
  updateSubject: SubjectModel;
  updateUser: UserModel;
};


export type MutationCreateCityArgs = {
  createCityInput: CreateCityInput;
};


export type MutationCreatePlaceArgs = {
  createPlaceInput: CreatePlaceInput;
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


export type MutationUpdatePlaceArgs = {
  updatePlaceInput: UpdatePlaceInput;
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


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type NewPromoPreviewItemInput = {
  baseEncodedImage: Scalars['String'];
  crossAxisCellCount: Scalars['Int'];
  mainAxisCellCount: Scalars['Int'];
  promoUuid: Scalars['String'];
};

export type PlaceModel = {
  __typename?: 'PlaceModel';
  address: Scalars['String'];
  code: Scalars['String'];
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  latitude: Scalars['Float'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  longitude: Scalars['Float'];
  plans: Array<Plan>;
  promoPreview: Array<PromoPreview>;
  promoPreviewCrossAxisCount: Scalars['Int'];
  promos?: Maybe<Array<Promo>>;
  recs: Array<PlaceRecommendation>;
  schedule: Scalars['JSON'];
  subjects?: Maybe<Array<SubjectModel>>;
  timezone: Scalars['String'];
  title: Scalars['String'];
  uuid: Scalars['String'];
};

export type PlaceRecommendation = {
  __typename?: 'PlaceRecommendation';
  children: Array<PlaceRecommendation>;
  icon: Scalars['String'];
  linkedSubjects: Array<SubjectModel>;
  orderIndex: Scalars['Int'];
  parent?: Maybe<PlaceRecommendation>;
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

export type Promo = {
  __typename?: 'Promo';
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
  cities: Array<City>;
  citiesOnMap: Array<City>;
  city: City;
  findAllPromoPreviewOfPlace: Array<PromoPreview>;
  place: PlaceModel;
  placeRecommendation: PlaceRecommendation;
  placeRecommendations: Array<PlaceRecommendation>;
  placeWithCode: PlaceModel;
  places: Array<PlaceModel>;
  placesOnMap: Array<PlaceModel>;
  plan: Plan;
  plansOfPlace: Array<Plan>;
  promo: Promo;
  promosOfPlace: Array<Promo>;
  searchPlaces: Array<PlaceModel>;
  searchSubjects: Array<SubjectModel>;
  subject: SubjectModel;
  subjectsOfPlace: Array<SubjectModel>;
  user: UserModel;
  users: Array<UserModel>;
};


export type QueryCitiesOnMapArgs = {
  northeast: CoordinatesModel;
  southwest: CoordinatesModel;
};


export type QueryCityArgs = {
  uuid: Scalars['String'];
};


export type QueryFindAllPromoPreviewOfPlaceArgs = {
  placeUuid: Scalars['String'];
};


export type QueryPlaceArgs = {
  uuid: Scalars['String'];
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


export type QueryUserArgs = {
  email: Scalars['String'];
};

export type SubjectModel = {
  __typename?: 'SubjectModel';
  fields: Array<Scalars['JSON']>;
  images?: Maybe<Array<ImageModel>>;
  layerUuid: Scalars['String'];
  logoBackgroundColor: Scalars['String'];
  logoCloudinaryId: Scalars['String'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  placeUuid: Scalars['String'];
  recs?: Maybe<Array<PlaceRecommendation>>;
  schedule: Scalars['JSON'];
  shortDescription: Scalars['String'];
  uuid: Scalars['String'];
};

export type UpdateCityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
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

export type UserModel = {
  __typename?: 'UserModel';
  email: Scalars['String'];
  mustChangePassword: Scalars['Boolean'];
  places: Array<PlaceModel>;
  role: Scalars['String'];
};

export type GetListOfPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListOfPlacesQuery = { __typename?: 'Query', places: Array<{ __typename?: 'PlaceModel', uuid: string, title: string, logoUrl: string }> };

export type GetPlaceQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place: { __typename?: 'PlaceModel', title: string, logoUrl: string, address: string, schedule: any, recs: Array<{ __typename?: 'PlaceRecommendation', title: string }>, promos?: Array<{ __typename?: 'Promo', title: string }> | null } };

export type GetSubjectsOfPlaceQueryVariables = Exact<{
  placeUuid: Scalars['String'];
}>;


export type GetSubjectsOfPlaceQuery = { __typename?: 'Query', subjectsOfPlace: Array<{ __typename?: 'SubjectModel', uuid: string, name: string, layerUuid: string, logoUrl: string, logoBackgroundColor: string, images?: Array<{ __typename?: 'ImageModel', uuid: string, url: string, cloudinaryId: string }> | null }> };
