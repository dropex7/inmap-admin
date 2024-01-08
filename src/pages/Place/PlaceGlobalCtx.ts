import {createContext} from 'react';
import type {GetPlaceQuery} from '../../generated/graphql';

// @ts-expect-error context type error
export const PlaceGlobalCtx = createContext<GetPlaceQuery['place']>(null);
