/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** DateTime parser */
  DateTime: { input: any; output: any; }
  /** Fields parser */
  FieldModel: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Schedule week parser */
  ScheduleWeek: { input: any; output: any; }
  /** TimeZone string */
  TimeZone: { input: any; output: any; }
};

export type CityLocalizedModel = {
  __typename?: 'CityLocalizedModel';
  active: Scalars['Boolean']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type CoordinatesModel = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type CreateCityInput = {
  active: Scalars['Boolean']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type CreateParkingInput = {
  fields?: InputMaybe<Array<Scalars['JSON']['input']>>;
  levels: Scalars['JSON']['input'];
  placeUuid: Scalars['String']['input'];
  tariffs?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

export type CreatePlaceInput = {
  address: Scalars['String']['input'];
  code: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  isVisible: Scalars['Boolean']['input'];
  latitude: Scalars['Float']['input'];
  logoUrl: Scalars['String']['input'];
  longitude: Scalars['Float']['input'];
  schedule: Scalars['ScheduleWeek']['input'];
  timezone: Scalars['TimeZone']['input'];
  title: Scalars['String']['input'];
};

export type CreatePlaceLayerInput = {
  fullName: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
};

export type CreatePlaceRecommendationInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  parentUuid?: InputMaybe<Scalars['String']['input']>;
  placeUuid: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePlanInput = {
  key: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
  plan: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePromoInput = {
  content: Array<Scalars['JSON']['input']>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  largeImageUrl: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
  smallImageUrl: Scalars['String']['input'];
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  subjectsUuids: Array<Scalars['String']['input']>;
  subtitle: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateSubjectInput = {
  content: CreateTemplatedContentInputModel;
  images: Array<Scalars['String']['input']>;
  layerUuid: Scalars['String']['input'];
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
  promosUuids: Array<Scalars['String']['input']>;
  schedule: Scalars['ScheduleWeek']['input'];
  shortDescription: Scalars['String']['input'];
};

export type CreateTemplateInput = {
  /** Name of the template */
  name: Scalars['String']['input'];
  /** Tabs of this template */
  tabs: Array<CreateTemplateTabInput>;
};

export type CreateTemplateTabInput = {
  /** Fields in this tab */
  fields: Array<Scalars['String']['input']>;
  /** Name of the template */
  name: Scalars['String']['input'];
};

export type CreateTemplatedContentInputModel = {
  tabs: Array<CreateTemplatedContentTabInputModel>;
  templateUuid: Scalars['String']['input'];
};

export type CreateTemplatedContentTabInputModel = {
  fields: Array<Scalars['FieldModel']['input']>;
  templateTabUuid: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  places?: InputMaybe<Array<Scalars['String']['input']>>;
  role: Scalars['String']['input'];
};

export type FieldsContentModel = {
  __typename?: 'FieldsContentModel';
  en?: Maybe<Array<Scalars['JSON']['output']>>;
  es?: Maybe<Array<Scalars['JSON']['output']>>;
  originalFields: Array<Scalars['JSON']['output']>;
  parkingFields?: Maybe<FieldsContentModelParkingFields>;
  parkingTariffs?: Maybe<FieldsContentModelParkingTariffs>;
  place?: Maybe<FieldsContentModelPlace>;
  promo?: Maybe<FieldsContentModelPromo>;
  ru?: Maybe<Array<Scalars['JSON']['output']>>;
  uuid: Scalars['String']['output'];
  zh?: Maybe<Array<Scalars['JSON']['output']>>;
};

export type FieldsContentModelParkingFields = {
  __typename?: 'FieldsContentModelParkingFields';
  place: FieldsContentModelPlace;
};

export type FieldsContentModelParkingTariffs = {
  __typename?: 'FieldsContentModelParkingTariffs';
  place: FieldsContentModelPlace;
};

export type FieldsContentModelPlace = {
  __typename?: 'FieldsContentModelPlace';
  title: FieldsContentTextContentModel;
  uuid: Scalars['String']['output'];
};

export type FieldsContentModelPromo = {
  __typename?: 'FieldsContentModelPromo';
  title: FieldsContentTextContentModel;
};

export type FieldsContentTextContentModel = {
  __typename?: 'FieldsContentTextContentModel';
  originalText: Scalars['String']['output'];
};

export type GetPromosInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  placeUuid?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  subjectUuid?: InputMaybe<Scalars['String']['input']>;
};

export type GetPromosResponseModel = {
  __typename?: 'GetPromosResponseModel';
  items: Array<PromoLocalizedModel>;
  total: Scalars['Int']['output'];
};

export type GetSubjectsOfPlaceInput = {
  layerUuid?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  placeUuid?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  selectedRec?: InputMaybe<Scalars['String']['input']>;
};

export type GetSubjectsOfPlaceResponseModel = {
  __typename?: 'GetSubjectsOfPlaceResponseModel';
  items: Array<SubjectLocalizedModel>;
  total: Scalars['Int']['output'];
};

export type LocalizedTemplateTabModel = {
  __typename?: 'LocalizedTemplateTabModel';
  /** Fields in this tab */
  fields: Array<Scalars['String']['output']>;
  /** Name of the template */
  name: Scalars['String']['output'];
  /** UUID of the template's tab */
  uuid: Scalars['String']['output'];
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
  createSubject: SubjectLocalizedModel;
  createTemplate: TemplateLocalizedModel;
  createUser: UserLocalizedModel;
  movePlaceLayerDown: PlaceLayerLocalizedModel;
  movePlaceLayerUp: PlaceLayerLocalizedModel;
  movePlaceRecommendationLeft: PlaceRecommendationLocalizedModel;
  movePlaceRecommendationRight: PlaceRecommendationLocalizedModel;
  removeCity: RemoveResponse;
  removeParking: RemoveResponse;
  removePlace: RemoveResponse;
  removePlaceLayer: RemoveResponse;
  removePlaceRecommendation: RemoveResponse;
  removePlan: RemoveResponse;
  removePromo: RemoveResponse;
  removeSubject: RemoveResponse;
  removeUser: RemoveResponse;
  setLinkedRecsToSubject: SubjectLocalizedModel;
  setLinkedSubjectsToRecommendation: PlaceRecommendationLocalizedModel;
  updateCity: CityLocalizedModel;
  updateFieldsContent: FieldsContentModel;
  updateFieldsTranslation: FieldsContentModel;
  updateLinkedTemplatesToPlace: PlaceLocalizedModel;
  updateParking: ParkingLocalizedModel;
  updatePlace: PlaceLocalizedModel;
  updatePlaceLayer: PlaceLayerLocalizedModel;
  updatePlaceRecommendation: PlaceRecommendationLocalizedModel;
  updatePlan: Plan;
  updatePromo: PromoLocalizedModel;
  updateSubject: SubjectLocalizedModel;
  updateTextContent: TextContentModel;
  updateTextTranslation: TextContentModel;
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
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationMovePlaceLayerUpArgs = {
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationMovePlaceRecommendationLeftArgs = {
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationMovePlaceRecommendationRightArgs = {
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationRemoveCityArgs = {
  uuid: Scalars['String']['input'];
};


export type MutationRemoveParkingArgs = {
  uuid: Scalars['String']['input'];
};


export type MutationRemovePlaceArgs = {
  uuid: Scalars['String']['input'];
};


export type MutationRemovePlaceLayerArgs = {
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationRemovePlaceRecommendationArgs = {
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationRemovePlanArgs = {
  key: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
};


export type MutationRemovePromoArgs = {
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationRemoveSubjectArgs = {
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationSetLinkedRecsToSubjectArgs = {
  placeUuid: Scalars['String']['input'];
  recsUuids: Array<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};


export type MutationSetLinkedSubjectsToRecommendationArgs = {
  placeUuid: Scalars['String']['input'];
  subjectsUuids: Array<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};


export type MutationUpdateCityArgs = {
  updateCityInput: UpdateCityInput;
};


export type MutationUpdateFieldsContentArgs = {
  input: UpdateFieldsContentInput;
};


export type MutationUpdateFieldsTranslationArgs = {
  input: UpdateFieldsTranslationInput;
};


export type MutationUpdateLinkedTemplatesToPlaceArgs = {
  placeUuid: Scalars['String']['input'];
  templatesUuidsToAdd: Array<Scalars['String']['input']>;
  templatesUuidsToRemove: Array<Scalars['String']['input']>;
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


export type MutationUpdateSubjectArgs = {
  placeUuid: Scalars['String']['input'];
  updateSubjectInput: UpdateSubjectInput;
};


export type MutationUpdateTextContentArgs = {
  input: UpdateTextContentInput;
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

export type ParkingLocalizedModel = {
  __typename?: 'ParkingLocalizedModel';
  fields?: Maybe<Array<Scalars['JSON']['output']>>;
  levels: Scalars['JSON']['output'];
  placeUuid: Scalars['String']['output'];
  tariffs?: Maybe<Array<Scalars['JSON']['output']>>;
  uuid: Scalars['String']['output'];
};

export type PlaceLayerLocalizedModel = {
  __typename?: 'PlaceLayerLocalizedModel';
  fullName: Scalars['String']['output'];
  orderIndex: Scalars['Int']['output'];
  shortName: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type PlaceLocalizedModel = {
  __typename?: 'PlaceLocalizedModel';
  address: Scalars['String']['output'];
  code: Scalars['String']['output'];
  fields?: Maybe<Array<Scalars['FieldModel']['output']>>;
  images: Array<Scalars['String']['output']>;
  initialLayerUuid?: Maybe<Scalars['String']['output']>;
  isVisible: Scalars['Boolean']['output'];
  latitude: Scalars['Float']['output'];
  logoUrl: Scalars['String']['output'];
  longitude: Scalars['Float']['output'];
  parking?: Maybe<ParkingLocalizedModel>;
  plans: Array<Plan>;
  promos?: Maybe<Array<PromoLocalizedModel>>;
  recs: Array<PlaceRecommendationLocalizedModel>;
  schedule: Scalars['ScheduleWeek']['output'];
  selectedPlan?: Maybe<Plan>;
  subjectsUuids?: Maybe<Array<Scalars['String']['output']>>;
  timezone: Scalars['TimeZone']['output'];
  title: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type PlaceRecommendationLocalizedModel = {
  __typename?: 'PlaceRecommendationLocalizedModel';
  icon?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  linkedSubjects: Array<RecommendationLinkedSubjectModel>;
  orderIndex: Scalars['Int']['output'];
  parent?: Maybe<PlaceRecommendationLocalizedModel>;
  title: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type PlaceSearchModel = {
  __typename?: 'PlaceSearchModel';
  address: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  isVisible: Scalars['Boolean']['output'];
  latitude: Scalars['Float']['output'];
  logoUrl: Scalars['String']['output'];
  longitude: Scalars['Float']['output'];
  schedule: Scalars['ScheduleWeek']['output'];
  title: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type PlacesSearchResModel = {
  __typename?: 'PlacesSearchResModel';
  items: Array<PlaceSearchModel>;
  total: Scalars['Float']['output'];
};

export type Plan = {
  __typename?: 'Plan';
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type PromoLocalizedModel = {
  __typename?: 'PromoLocalizedModel';
  content: Array<Scalars['JSON']['output']>;
  endDateTime?: Maybe<Scalars['DateTime']['output']>;
  largeImageUrl: Scalars['String']['output'];
  placeUuid: Scalars['String']['output'];
  smallImageUrl: Scalars['String']['output'];
  startDateTime?: Maybe<Scalars['DateTime']['output']>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type PromoSearchModel = {
  __typename?: 'PromoSearchModel';
  endDateTime?: Maybe<Scalars['DateTime']['output']>;
  largeImageUrl: Scalars['String']['output'];
  placeUuid: Scalars['String']['output'];
  smallImageUrl: Scalars['String']['output'];
  startDateTime?: Maybe<Scalars['DateTime']['output']>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type PromosSearchResModel = {
  __typename?: 'PromosSearchResModel';
  items: Array<PromoSearchModel>;
  total: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  cities: Array<CityLocalizedModel>;
  citiesOnMap: Array<CityLocalizedModel>;
  city: CityLocalizedModel;
  fieldsContentsOfPlace: Array<FieldsContentModel>;
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
  promos: GetPromosResponseModel;
  searchPlaces: PlacesSearchResModel;
  searchPlacesAll: PlacesSearchResModel;
  searchPromos: PromosSearchResModel;
  searchSubjects: SubjectsSearchResModel;
  subject: SubjectLocalizedModel;
  subjectsLinkedToPromo: Array<SubjectLocalizedModel>;
  subjectsOfPlace: GetSubjectsOfPlaceResponseModel;
  template: TemplateLocalizedModel;
  templates: Array<TemplateLocalizedModel>;
  templatesOfPlace: Array<TemplateLocalizedModel>;
  textContent: TextContentModelLight;
  textContentsOfPlace: Array<TextContentModel>;
  user: UserLocalizedModel;
  users: Array<UserLocalizedModel>;
  validVersion: ValidVersion;
};


export type QueryCitiesOnMapArgs = {
  northeast: CoordinatesModel;
  southwest: CoordinatesModel;
};


export type QueryCityArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryFieldsContentsOfPlaceArgs = {
  placeUuid: Scalars['String']['input'];
};


export type QueryParkingArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryParkingWithPlaceUuidArgs = {
  placeUuid: Scalars['String']['input'];
};


export type QueryPlaceArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryPlaceLayerArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryPlaceLayersArgs = {
  placeUuid: Scalars['String']['input'];
};


export type QueryPlaceRecommendationArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryPlaceRecommendationsArgs = {
  parentUuid?: InputMaybe<Scalars['String']['input']>;
  placeUuid: Scalars['String']['input'];
};


export type QueryPlaceWithCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryPlacesOnMapArgs = {
  northeast: CoordinatesModel;
  southwest: CoordinatesModel;
};


export type QueryPlanArgs = {
  key: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
};


export type QueryPlansOfPlaceArgs = {
  placeUuid: Scalars['String']['input'];
};


export type QueryPromoArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryPromosArgs = {
  input: GetPromosInput;
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
  placeUuid: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type QuerySubjectsLinkedToPromoArgs = {
  placeUuid: Scalars['String']['input'];
  promoUuid: Scalars['String']['input'];
};


export type QuerySubjectsOfPlaceArgs = {
  input: GetSubjectsOfPlaceInput;
};


export type QueryTemplateArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryTemplatesOfPlaceArgs = {
  placeUuid: Scalars['String']['input'];
};


export type QueryTextContentArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryTextContentsOfPlaceArgs = {
  placeUuid: Scalars['String']['input'];
};


export type QueryUserArgs = {
  email: Scalars['String']['input'];
};


export type QueryValidVersionArgs = {
  input: ValidVersionInput;
};

export type RecommendationLinkedSubjectModel = {
  __typename?: 'RecommendationLinkedSubjectModel';
  name: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type RemoveResponse = {
  __typename?: 'RemoveResponse';
  removed: Scalars['Boolean']['output'];
};

export type SearchPlacesInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
};

export type SearchPromosInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  placeUuid?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type SearchSubjectsInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  placeUuid?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  rec?: InputMaybe<Scalars['String']['input']>;
};

export type SubjectLocalizedModel = {
  __typename?: 'SubjectLocalizedModel';
  content?: Maybe<TemplatedContentLocalizedModel>;
  images: Array<Scalars['String']['output']>;
  layerName: Scalars['String']['output'];
  layerUuid: Scalars['String']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  placeUuid: Scalars['String']['output'];
  recs?: Maybe<Array<PlaceRecommendationLocalizedModel>>;
  schedule: Scalars['ScheduleWeek']['output'];
  shortDescription: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type SubjectSearchModel = {
  __typename?: 'SubjectSearchModel';
  images: Array<Scalars['String']['output']>;
  layerUuid: Scalars['String']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  placeUuid: Scalars['String']['output'];
  schedule: Scalars['ScheduleWeek']['output'];
  shortDescription: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type SubjectsSearchResModel = {
  __typename?: 'SubjectsSearchResModel';
  items: Array<SubjectSearchModel>;
  total: Scalars['Float']['output'];
};

export type TemplateLocalizedModel = {
  __typename?: 'TemplateLocalizedModel';
  /** Name of the template */
  name: Scalars['String']['output'];
  /** Tabs of this template */
  tabs: Array<LocalizedTemplateTabModel>;
  /** UUID of the template */
  uuid: Scalars['String']['output'];
};

export type TemplatedContentLocalizedModel = {
  __typename?: 'TemplatedContentLocalizedModel';
  tabs: Array<TemplatedContentTabLocalizedModel>;
  templateUuid: Scalars['String']['output'];
};

export type TemplatedContentTabLocalizedModel = {
  __typename?: 'TemplatedContentTabLocalizedModel';
  fields: Array<Scalars['FieldModel']['output']>;
  name: Scalars['String']['output'];
  templateTabUuid: Scalars['String']['output'];
};

export type TextContentModel = {
  __typename?: 'TextContentModel';
  en?: Maybe<Scalars['String']['output']>;
  es?: Maybe<Scalars['String']['output']>;
  originalText: Scalars['String']['output'];
  ru?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['String']['output'];
  zh?: Maybe<Scalars['String']['output']>;
};

export type TextContentModelLight = {
  __typename?: 'TextContentModelLight';
  originalText: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type UpdateCityInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};

export type UpdateFieldsContentInput = {
  en?: InputMaybe<Array<Scalars['JSON']['input']>>;
  es?: InputMaybe<Array<Scalars['JSON']['input']>>;
  fieldsContentId: Scalars['String']['input'];
  originalFields?: InputMaybe<Array<Scalars['JSON']['input']>>;
  ru?: InputMaybe<Array<Scalars['JSON']['input']>>;
  zh?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

export type UpdateFieldsTranslationInput = {
  fieldsContentId: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  translation?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

export type UpdateParkingInput = {
  fields?: InputMaybe<Array<Scalars['JSON']['input']>>;
  levels: Scalars['JSON']['input'];
  tariffs?: InputMaybe<Array<Scalars['JSON']['input']>>;
  uuid: Scalars['String']['input'];
};

export type UpdatePlaceInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['FieldModel']['input']>>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  initialLayerUuid?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  promoPreviewCrossAxisCount?: InputMaybe<Scalars['Int']['input']>;
  schedule?: InputMaybe<Scalars['ScheduleWeek']['input']>;
  selectedPlanKey?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['TimeZone']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};

export type UpdatePlaceLayerInput = {
  fullName: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};

export type UpdatePlaceRecommendationInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  placeUuid: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};

export type UpdatePlanInput = {
  key: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
  plan?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePromoInput = {
  content?: InputMaybe<Array<Scalars['JSON']['input']>>;
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  largeImageUrl?: InputMaybe<Scalars['String']['input']>;
  placeUuid: Scalars['String']['input'];
  smallImageUrl?: InputMaybe<Scalars['String']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  subjectsUuids?: InputMaybe<Array<Scalars['String']['input']>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};

export type UpdateSubjectInput = {
  content?: InputMaybe<CreateTemplatedContentInputModel>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  layerUuid?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promosUuids?: InputMaybe<Array<Scalars['String']['input']>>;
  schedule?: InputMaybe<Scalars['ScheduleWeek']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};

export type UpdateTextContentInput = {
  en?: InputMaybe<Scalars['String']['input']>;
  es?: InputMaybe<Scalars['String']['input']>;
  originalText?: InputMaybe<Scalars['String']['input']>;
  ru?: InputMaybe<Scalars['String']['input']>;
  textContentId: Scalars['String']['input'];
  zh?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTextTranslationInput = {
  locale: Scalars['String']['input'];
  textContentId: Scalars['String']['input'];
  translation?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  addPlaces?: InputMaybe<Array<Scalars['String']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  mustChangePassword?: InputMaybe<Scalars['Boolean']['input']>;
  places?: InputMaybe<Array<Scalars['String']['input']>>;
  removePlaces?: InputMaybe<Array<Scalars['String']['input']>>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type UploadInput = {
  /** file to upload encoded in base64 */
  base64EncodedData: Scalars['String']['input'];
  /** uuid of place this file relies to */
  placeUuid: Scalars['String']['input'];
};

export type UploadResult = {
  __typename?: 'UploadResult';
  /** Url of stored file */
  url: Scalars['String']['output'];
};

export type UserConnectedPlace = {
  __typename?: 'UserConnectedPlace';
  title: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type UserLocalizedModel = {
  __typename?: 'UserLocalizedModel';
  connectedPlaces: Array<UserConnectedPlace>;
  email: Scalars['String']['output'];
  mustChangePassword: Scalars['Boolean']['output'];
  role: Scalars['String']['output'];
};

export type ValidVersion = {
  __typename?: 'ValidVersion';
  /** If this app version is valid */
  versionValid: Scalars['Boolean']['output'];
};

export type ValidVersionInput = {
  /** Platform of app (android/ios) */
  platform: Scalars['String']['input'];
  /** Number of app version (ex 2.0.0) */
  versionNumber: Scalars['String']['input'];
};

export type UploadImageMutationVariables = Exact<{
  uploadInput: UploadInput;
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage: { __typename?: 'UploadResult', url: string } };

export type GetListOfPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListOfPlacesQuery = { __typename?: 'Query', places: Array<{ __typename?: 'PlaceLocalizedModel', uuid: string, title: string, logoUrl: string }> };

export type GetPlaceQueryVariables = Exact<{
  uuid: Scalars['String']['input'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place: { __typename?: 'PlaceLocalizedModel', title: string, logoUrl: string, address: string, schedule: any, initialLayerUuid?: string | null, selectedPlan?: { __typename?: 'Plan', key: string } | null, recs: Array<{ __typename?: 'PlaceRecommendationLocalizedModel', title: string }>, promos?: Array<{ __typename?: 'PromoLocalizedModel', title: string }> | null } };

export type GetPlaceLayersQueryVariables = Exact<{
  placeUuid: Scalars['String']['input'];
}>;


export type GetPlaceLayersQuery = { __typename?: 'Query', placeLayers: Array<{ __typename?: 'PlaceLayerLocalizedModel', uuid: string, fullName: string, shortName: string }> };

export type GetPlansOfPlaceQueryVariables = Exact<{
  placeUuid: Scalars['String']['input'];
}>;


export type GetPlansOfPlaceQuery = { __typename?: 'Query', plansOfPlace: Array<{ __typename?: 'Plan', key: string, title: string }> };

export type CreatePromoMutationVariables = Exact<{
  createPromoInput: CreatePromoInput;
}>;


export type CreatePromoMutation = { __typename?: 'Mutation', createPromo: { __typename?: 'PromoLocalizedModel', uuid: string, smallImageUrl: string } };

export type UpdatePromoMutationVariables = Exact<{
  updatePromoInput: UpdatePromoInput;
}>;


export type UpdatePromoMutation = { __typename?: 'Mutation', updatePromo: { __typename?: 'PromoLocalizedModel', uuid: string, smallImageUrl: string } };

export type GetListOfPromosQueryVariables = Exact<{
  input: GetPromosInput;
}>;


export type GetListOfPromosQuery = { __typename?: 'Query', promos: { __typename?: 'GetPromosResponseModel', total: number, items: Array<{ __typename?: 'PromoLocalizedModel', uuid: string, title: string, subtitle: string, smallImageUrl: string, startDateTime?: any | null, endDateTime?: any | null }> } };

export type GetPromoByIdQueryVariables = Exact<{
  uuid: Scalars['String']['input'];
}>;


export type GetPromoByIdQuery = { __typename?: 'Query', promo: { __typename?: 'PromoLocalizedModel', uuid: string, title: string, subtitle: string, smallImageUrl: string, largeImageUrl: string, startDateTime?: any | null, endDateTime?: any | null, content: Array<any> } };

export type SearchPromosQueryVariables = Exact<{
  searchPromosInput: SearchPromosInput;
}>;


export type SearchPromosQuery = { __typename?: 'Query', searchPromos: { __typename?: 'PromosSearchResModel', total: number, items: Array<{ __typename?: 'PromoSearchModel', uuid: string, placeUuid: string, smallImageUrl: string, largeImageUrl: string, title: string, subtitle: string }> } };

export type CreateSubjectMutationVariables = Exact<{
  createSubjectInput: CreateSubjectInput;
}>;


export type CreateSubjectMutation = { __typename?: 'Mutation', createSubject: { __typename?: 'SubjectLocalizedModel', uuid: string } };

export type UpdateSubjectMutationVariables = Exact<{
  updateSubjectInput: UpdateSubjectInput;
  placeUuid: Scalars['String']['input'];
}>;


export type UpdateSubjectMutation = { __typename?: 'Mutation', updateSubject: { __typename?: 'SubjectLocalizedModel', uuid: string } };

export type DeleteSubjectMutationVariables = Exact<{
  uuid: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
}>;


export type DeleteSubjectMutation = { __typename?: 'Mutation', removeSubject: { __typename?: 'RemoveResponse', removed: boolean } };

export type SearchSubjectsOfPlaceQueryVariables = Exact<{
  searchSubjectsInput: SearchSubjectsInput;
}>;


export type SearchSubjectsOfPlaceQuery = { __typename?: 'Query', searchSubjects: { __typename?: 'SubjectsSearchResModel', total: number, items: Array<{ __typename?: 'SubjectSearchModel', uuid: string, name: string, layerUuid: string, logoUrl: string, shortDescription: string, images: Array<string> }> } };

export type GetSubjectsOfPlaceInputQueryVariables = Exact<{
  input: GetSubjectsOfPlaceInput;
}>;


export type GetSubjectsOfPlaceInputQuery = { __typename?: 'Query', subjectsOfPlace: { __typename?: 'GetSubjectsOfPlaceResponseModel', total: number, items: Array<{ __typename?: 'SubjectLocalizedModel', uuid: string, name: string, layerUuid: string, logoUrl: string, shortDescription: string, images: Array<string> }> } };

export type GetSubjectsByIdQueryVariables = Exact<{
  uuid: Scalars['String']['input'];
  placeUuid: Scalars['String']['input'];
}>;


export type GetSubjectsByIdQuery = { __typename?: 'Query', subject: { __typename?: 'SubjectLocalizedModel', uuid: string, name: string, placeUuid: string, layerUuid: string, layerName: string, logoUrl: string, shortDescription: string, images: Array<string>, schedule: any, content?: { __typename?: 'TemplatedContentLocalizedModel', templateUuid: string, tabs: Array<{ __typename?: 'TemplatedContentTabLocalizedModel', templateTabUuid: string, name: string, fields: Array<any> }> } | null } };

export type GetSubjectsByPromoQueryVariables = Exact<{
  placeUuid: Scalars['String']['input'];
  promoUuid: Scalars['String']['input'];
}>;


export type GetSubjectsByPromoQuery = { __typename?: 'Query', subjectsLinkedToPromo: Array<{ __typename?: 'SubjectLocalizedModel', uuid: string, name: string, logoUrl: string }> };


export const UploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uploadInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UploadImageMutation, UploadImageMutationVariables>;
export const GetListOfPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListOfPlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]}}]} as unknown as DocumentNode<GetListOfPlacesQuery, GetListOfPlacesQueryVariables>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"selectedPlan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"initialLayerUuid"}},{"kind":"Field","name":{"kind":"Name","value":"recs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"promos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
export const GetPlaceLayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlaceLayers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeLayers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}}]}}]}}]} as unknown as DocumentNode<GetPlaceLayersQuery, GetPlaceLayersQueryVariables>;
export const GetPlansOfPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlansOfPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plansOfPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetPlansOfPlaceQuery, GetPlansOfPlaceQueryVariables>;
export const CreatePromoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePromo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPromoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePromoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPromo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPromoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPromoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"smallImageUrl"}}]}}]}}]} as unknown as DocumentNode<CreatePromoMutation, CreatePromoMutationVariables>;
export const UpdatePromoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePromo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePromoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePromoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePromo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePromoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePromoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"smallImageUrl"}}]}}]}}]} as unknown as DocumentNode<UpdatePromoMutation, UpdatePromoMutationVariables>;
export const GetListOfPromosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListOfPromos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPromosInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"smallImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}}]}}]}}]}}]} as unknown as DocumentNode<GetListOfPromosQuery, GetListOfPromosQueryVariables>;
export const GetPromoByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPromoById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"smallImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"largeImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"startDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"endDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetPromoByIdQuery, GetPromoByIdQueryVariables>;
export const SearchPromosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPromos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchPromosInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchPromosInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchPromos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchPromosInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchPromosInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"placeUuid"}},{"kind":"Field","name":{"kind":"Name","value":"smallImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"largeImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}}]}}]}}]} as unknown as DocumentNode<SearchPromosQuery, SearchPromosQueryVariables>;
export const CreateSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubjectInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}}]}}]} as unknown as DocumentNode<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const UpdateSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSubjectInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubjectInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSubjectInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSubjectInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}}]}}]} as unknown as DocumentNode<UpdateSubjectMutation, UpdateSubjectMutationVariables>;
export const DeleteSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}}]}}]} as unknown as DocumentNode<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const SearchSubjectsOfPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchSubjectsOfPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchSubjectsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchSubjectsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchSubjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchSubjectsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchSubjectsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layerUuid"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]}}]} as unknown as DocumentNode<SearchSubjectsOfPlaceQuery, SearchSubjectsOfPlaceQueryVariables>;
export const GetSubjectsOfPlaceInputDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjectsOfPlaceInput"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSubjectsOfPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subjectsOfPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layerUuid"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubjectsOfPlaceInputQuery, GetSubjectsOfPlaceInputQueryVariables>;
export const GetSubjectsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjectsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"placeUuid"}},{"kind":"Field","name":{"kind":"Name","value":"layerUuid"}},{"kind":"Field","name":{"kind":"Name","value":"layerName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateUuid"}},{"kind":"Field","name":{"kind":"Name","value":"tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateTabUuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSubjectsByIdQuery, GetSubjectsByIdQueryVariables>;
export const GetSubjectsByPromoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjectsByPromo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"promoUuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subjectsLinkedToPromo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placeUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placeUuid"}}},{"kind":"Argument","name":{"kind":"Name","value":"promoUuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"promoUuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]}}]} as unknown as DocumentNode<GetSubjectsByPromoQuery, GetSubjectsByPromoQueryVariables>;