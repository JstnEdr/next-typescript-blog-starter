import dynamic from 'next/dynamic';
import React from 'react';

interface Props {}

const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../test-component')),
  // h1: dynamic(() => import('./H1')),
};

export default components;
