import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import DataPage from './DataPage';

describe('DataPage Component', () => {
  it('should render successfully', () => {
    render(<DataPage />);
  });
});
