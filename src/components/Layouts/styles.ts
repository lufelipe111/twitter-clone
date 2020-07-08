import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex; /* permite distribuir os Components lado a lado */
  justify-content: center; /* Alinha o conteúdo no centro */
`;