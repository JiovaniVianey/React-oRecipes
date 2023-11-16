import { expect, test, describe } from 'vitest';

import { findRecipe } from '../../src/selectors/recipes';

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
