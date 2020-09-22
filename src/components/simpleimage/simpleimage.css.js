import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Singlecontainer = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, max-content);
  grid-gap: 1rem;
  padding: 0 4rem;
  margin: 1rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
