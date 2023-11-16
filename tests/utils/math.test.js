// ici les tests unitaires pour les fonctions du fichier src/utils/math.js

// on importe des outils de vitest
import { expect, test } from 'vitest';

// on importe les morceaux de code à tester
import { sum } from '../../src/utils/math';

test('sum of positive numbers', () => {
  expect(sum(3, 5)).toBe(8);
  expect(sum(145, 585)).toBe(730);
});

test('sum of negative numbers', () => {
  expect(sum(-10, 52)).toBe(42);
  expect(sum(12, -5)).toBe(7);
  expect(sum(-69, -42)).toBe(-111);
});
