/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation UploadImage($uploadInput: UploadInput!) {\n        uploadImage(uploadInput: $uploadInput) {\n            url\n        }\n    }\n": types.UploadImageDocument,
    "\n    query GetListOfPlaces {\n        places {\n            uuid\n            title\n            logoUrl\n        }\n    }\n": types.GetListOfPlacesDocument,
    "\n    query GetPlace($uuid: String!) {\n        place(uuid: $uuid) {\n            title\n            logoUrl\n            address\n            schedule\n            selectedPlan {\n                key\n            }\n            initialLayerUuid\n            recs {\n                title\n            }\n            promos {\n                title\n            }\n        }\n    }\n": types.GetPlaceDocument,
    "\n    query GetPlaceLayers($placeUuid: String!) {\n        placeLayers(placeUuid: $placeUuid) {\n            uuid\n            fullName\n            shortName\n        }\n    }\n": types.GetPlaceLayersDocument,
    "\n    query GetPlansOfPlace($placeUuid: String!) {\n        plansOfPlace(placeUuid: $placeUuid) {\n            key\n            title\n        }\n    }\n": types.GetPlansOfPlaceDocument,
    "\n    query GetPlaceRecommendations($placeUuid: String!) {\n        placeRecommendations(placeUuid: $placeUuid) {\n            uuid\n            icon\n            image\n            parent {\n                uuid\n            }\n            title\n        }\n    }\n": types.GetPlaceRecommendationsDocument,
    "\n    mutation CreatePromo($createPromoInput: CreatePromoInput!) {\n        createPromo(createPromoInput: $createPromoInput) {\n            uuid\n            smallImageUrl\n        }\n    }\n": types.CreatePromoDocument,
    "\n    mutation UpdatePromo($updatePromoInput: UpdatePromoInput!) {\n        updatePromo(updatePromoInput: $updatePromoInput) {\n            uuid\n            smallImageUrl\n        }\n    }\n": types.UpdatePromoDocument,
    "\n    query GetListOfPromos($input: GetPromosInput!) {\n        promos(input: $input) {\n            total\n            items {\n                uuid\n                title\n                subtitle\n                smallImageUrl\n                subtitle\n                startDateTime\n                endDateTime\n                createdAt\n                updatedAt\n            }\n        }\n    }\n": types.GetListOfPromosDocument,
    "\n    query GetPromoById($uuid: String!) {\n        promo(uuid: $uuid) {\n            uuid\n            title\n            subtitle\n            smallImageUrl\n            largeImageUrl\n            subtitle\n            startDateTime\n            endDateTime\n            content\n        }\n    }\n": types.GetPromoByIdDocument,
    "\n    query SearchPromos($searchPromosInput: SearchPromosInput!) {\n        searchPromos(searchPromosInput: $searchPromosInput) {\n            total\n            items {\n                uuid\n                placeUuid\n                smallImageUrl\n                largeImageUrl\n                title\n                subtitle\n            }\n        }\n    }\n": types.SearchPromosDocument,
    "\n    mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {\n        createSubject(createSubjectInput: $createSubjectInput) {\n            uuid\n        }\n    }\n": types.CreateSubjectDocument,
    "\n    mutation UpdateSubject($updateSubjectInput: UpdateSubjectInput!, $placeUuid: String!) {\n        updateSubject(updateSubjectInput: $updateSubjectInput, placeUuid: $placeUuid) {\n            uuid\n        }\n    }\n": types.UpdateSubjectDocument,
    "\n    mutation DeleteSubject($uuid: String!, $placeUuid: String!) {\n        removeSubject(uuid: $uuid, placeUuid: $placeUuid) {\n            removed\n        }\n    }\n": types.DeleteSubjectDocument,
    "\n    query SearchSubjectsOfPlace($searchSubjectsInput: SearchSubjectsInput!) {\n        searchSubjects(searchSubjectsInput: $searchSubjectsInput) {\n            total\n            items {\n                uuid\n                name\n                layerUuid\n                logoUrl\n                shortDescription\n                images\n            }\n        }\n    }\n": types.SearchSubjectsOfPlaceDocument,
    "\n    query GetSubjectsOfPlaceInput($input: GetSubjectsOfPlaceInput!) {\n        subjectsOfPlace(input: $input) {\n            total\n            items {\n                uuid\n                name\n                layerUuid\n                logoUrl\n                shortDescription\n                images\n            }\n        }\n    }\n": types.GetSubjectsOfPlaceInputDocument,
    "\n    query GetSubjectsById($uuid: String!, $placeUuid: String!) {\n        subject(uuid: $uuid, placeUuid: $placeUuid) {\n            uuid\n            name\n            placeUuid\n            layerUuid\n            layerName\n            logoUrl\n            shortDescription\n            images\n            schedule\n            recs {\n                uuid\n                parent {\n                    uuid\n                    title\n                    orderIndex\n                }\n                title\n                image\n                orderIndex\n            }\n            content {\n                templateUuid\n                tabs {\n                    templateTabUuid\n                    name\n                    fields\n                }\n            }\n        }\n    }\n": types.GetSubjectsByIdDocument,
    "\n    query GetSubjectsByPromo($placeUuid: String!, $promoUuid: String!) {\n        subjectsLinkedToPromo(placeUuid: $placeUuid, promoUuid: $promoUuid) {\n            uuid\n            name\n            logoUrl\n        }\n    }\n": types.GetSubjectsByPromoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UploadImage($uploadInput: UploadInput!) {\n        uploadImage(uploadInput: $uploadInput) {\n            url\n        }\n    }\n"): (typeof documents)["\n    mutation UploadImage($uploadInput: UploadInput!) {\n        uploadImage(uploadInput: $uploadInput) {\n            url\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetListOfPlaces {\n        places {\n            uuid\n            title\n            logoUrl\n        }\n    }\n"): (typeof documents)["\n    query GetListOfPlaces {\n        places {\n            uuid\n            title\n            logoUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlace($uuid: String!) {\n        place(uuid: $uuid) {\n            title\n            logoUrl\n            address\n            schedule\n            selectedPlan {\n                key\n            }\n            initialLayerUuid\n            recs {\n                title\n            }\n            promos {\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPlace($uuid: String!) {\n        place(uuid: $uuid) {\n            title\n            logoUrl\n            address\n            schedule\n            selectedPlan {\n                key\n            }\n            initialLayerUuid\n            recs {\n                title\n            }\n            promos {\n                title\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlaceLayers($placeUuid: String!) {\n        placeLayers(placeUuid: $placeUuid) {\n            uuid\n            fullName\n            shortName\n        }\n    }\n"): (typeof documents)["\n    query GetPlaceLayers($placeUuid: String!) {\n        placeLayers(placeUuid: $placeUuid) {\n            uuid\n            fullName\n            shortName\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlansOfPlace($placeUuid: String!) {\n        plansOfPlace(placeUuid: $placeUuid) {\n            key\n            title\n        }\n    }\n"): (typeof documents)["\n    query GetPlansOfPlace($placeUuid: String!) {\n        plansOfPlace(placeUuid: $placeUuid) {\n            key\n            title\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlaceRecommendations($placeUuid: String!) {\n        placeRecommendations(placeUuid: $placeUuid) {\n            uuid\n            icon\n            image\n            parent {\n                uuid\n            }\n            title\n        }\n    }\n"): (typeof documents)["\n    query GetPlaceRecommendations($placeUuid: String!) {\n        placeRecommendations(placeUuid: $placeUuid) {\n            uuid\n            icon\n            image\n            parent {\n                uuid\n            }\n            title\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreatePromo($createPromoInput: CreatePromoInput!) {\n        createPromo(createPromoInput: $createPromoInput) {\n            uuid\n            smallImageUrl\n        }\n    }\n"): (typeof documents)["\n    mutation CreatePromo($createPromoInput: CreatePromoInput!) {\n        createPromo(createPromoInput: $createPromoInput) {\n            uuid\n            smallImageUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdatePromo($updatePromoInput: UpdatePromoInput!) {\n        updatePromo(updatePromoInput: $updatePromoInput) {\n            uuid\n            smallImageUrl\n        }\n    }\n"): (typeof documents)["\n    mutation UpdatePromo($updatePromoInput: UpdatePromoInput!) {\n        updatePromo(updatePromoInput: $updatePromoInput) {\n            uuid\n            smallImageUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetListOfPromos($input: GetPromosInput!) {\n        promos(input: $input) {\n            total\n            items {\n                uuid\n                title\n                subtitle\n                smallImageUrl\n                subtitle\n                startDateTime\n                endDateTime\n                createdAt\n                updatedAt\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetListOfPromos($input: GetPromosInput!) {\n        promos(input: $input) {\n            total\n            items {\n                uuid\n                title\n                subtitle\n                smallImageUrl\n                subtitle\n                startDateTime\n                endDateTime\n                createdAt\n                updatedAt\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPromoById($uuid: String!) {\n        promo(uuid: $uuid) {\n            uuid\n            title\n            subtitle\n            smallImageUrl\n            largeImageUrl\n            subtitle\n            startDateTime\n            endDateTime\n            content\n        }\n    }\n"): (typeof documents)["\n    query GetPromoById($uuid: String!) {\n        promo(uuid: $uuid) {\n            uuid\n            title\n            subtitle\n            smallImageUrl\n            largeImageUrl\n            subtitle\n            startDateTime\n            endDateTime\n            content\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SearchPromos($searchPromosInput: SearchPromosInput!) {\n        searchPromos(searchPromosInput: $searchPromosInput) {\n            total\n            items {\n                uuid\n                placeUuid\n                smallImageUrl\n                largeImageUrl\n                title\n                subtitle\n            }\n        }\n    }\n"): (typeof documents)["\n    query SearchPromos($searchPromosInput: SearchPromosInput!) {\n        searchPromos(searchPromosInput: $searchPromosInput) {\n            total\n            items {\n                uuid\n                placeUuid\n                smallImageUrl\n                largeImageUrl\n                title\n                subtitle\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {\n        createSubject(createSubjectInput: $createSubjectInput) {\n            uuid\n        }\n    }\n"): (typeof documents)["\n    mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {\n        createSubject(createSubjectInput: $createSubjectInput) {\n            uuid\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateSubject($updateSubjectInput: UpdateSubjectInput!, $placeUuid: String!) {\n        updateSubject(updateSubjectInput: $updateSubjectInput, placeUuid: $placeUuid) {\n            uuid\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateSubject($updateSubjectInput: UpdateSubjectInput!, $placeUuid: String!) {\n        updateSubject(updateSubjectInput: $updateSubjectInput, placeUuid: $placeUuid) {\n            uuid\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteSubject($uuid: String!, $placeUuid: String!) {\n        removeSubject(uuid: $uuid, placeUuid: $placeUuid) {\n            removed\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteSubject($uuid: String!, $placeUuid: String!) {\n        removeSubject(uuid: $uuid, placeUuid: $placeUuid) {\n            removed\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SearchSubjectsOfPlace($searchSubjectsInput: SearchSubjectsInput!) {\n        searchSubjects(searchSubjectsInput: $searchSubjectsInput) {\n            total\n            items {\n                uuid\n                name\n                layerUuid\n                logoUrl\n                shortDescription\n                images\n            }\n        }\n    }\n"): (typeof documents)["\n    query SearchSubjectsOfPlace($searchSubjectsInput: SearchSubjectsInput!) {\n        searchSubjects(searchSubjectsInput: $searchSubjectsInput) {\n            total\n            items {\n                uuid\n                name\n                layerUuid\n                logoUrl\n                shortDescription\n                images\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSubjectsOfPlaceInput($input: GetSubjectsOfPlaceInput!) {\n        subjectsOfPlace(input: $input) {\n            total\n            items {\n                uuid\n                name\n                layerUuid\n                logoUrl\n                shortDescription\n                images\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSubjectsOfPlaceInput($input: GetSubjectsOfPlaceInput!) {\n        subjectsOfPlace(input: $input) {\n            total\n            items {\n                uuid\n                name\n                layerUuid\n                logoUrl\n                shortDescription\n                images\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSubjectsById($uuid: String!, $placeUuid: String!) {\n        subject(uuid: $uuid, placeUuid: $placeUuid) {\n            uuid\n            name\n            placeUuid\n            layerUuid\n            layerName\n            logoUrl\n            shortDescription\n            images\n            schedule\n            recs {\n                uuid\n                parent {\n                    uuid\n                    title\n                    orderIndex\n                }\n                title\n                image\n                orderIndex\n            }\n            content {\n                templateUuid\n                tabs {\n                    templateTabUuid\n                    name\n                    fields\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetSubjectsById($uuid: String!, $placeUuid: String!) {\n        subject(uuid: $uuid, placeUuid: $placeUuid) {\n            uuid\n            name\n            placeUuid\n            layerUuid\n            layerName\n            logoUrl\n            shortDescription\n            images\n            schedule\n            recs {\n                uuid\n                parent {\n                    uuid\n                    title\n                    orderIndex\n                }\n                title\n                image\n                orderIndex\n            }\n            content {\n                templateUuid\n                tabs {\n                    templateTabUuid\n                    name\n                    fields\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetSubjectsByPromo($placeUuid: String!, $promoUuid: String!) {\n        subjectsLinkedToPromo(placeUuid: $placeUuid, promoUuid: $promoUuid) {\n            uuid\n            name\n            logoUrl\n        }\n    }\n"): (typeof documents)["\n    query GetSubjectsByPromo($placeUuid: String!, $promoUuid: String!) {\n        subjectsLinkedToPromo(placeUuid: $placeUuid, promoUuid: $promoUuid) {\n            uuid\n            name\n            logoUrl\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;