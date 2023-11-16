import { expect, test, describe } from 'vitest';

import { findRecipe } from '../../src/selectors/recipes';

import reducer, { initialState } from '../../src/reducers/recipes';
import { SET_RECIPES } from '../../src/actions/recipes';

describe('function findRecipe', () => {
  test('should return the recipe with the given slug if the slug is valid', () => {
    const recipesData = [
      {
        slug: 'crepes',
        name: 'crêpes raffinées',
      },
      {
        slug: 'hamburger',
        name: 'hamburger au paprika',
      },
    ];

    const { slug } = recipesData[0];

    const expectedResult = recipesData[0];

    expect(findRecipe(recipesData, slug)).toBe(expectedResult);
  });
});

describe('recipes reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle SET_RECIPES', () => {
    const recipesData = [
      {
        slug: 'crepes',
        name: 'crêpes raffinées',
      },
      {
        slug: 'hamburger',
        name: 'hamburger au paprika',
      },
    ];
    const action = { type: SET_RECIPES, recipes: recipesData };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ list: recipesData });
  });
});
