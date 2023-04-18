import React from 'react';
import styled from '@emotion/styled';

function MDEditorSkeleton() {
  return (
    <Container>
      <Toolbar />
      <Content />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: 
    0 0 0 1px rgba(16, 22, 26, 0.1), 
    0 0 0 rgba(16, 22, 26, 0), 
    0 1px 1px rgba(16, 22, 26, 0.2);
  border-radius: 3px;
`;

const Toolbar = styled.div`
  height: 56px;
  border-bottom: 1px solid #dfdfe0;
  background-color: #fbfbfb;
  padding: 0 5px 0 5px;
`;

const Content = styled.div`
  width: 50%;
  height: 444px;;
  border-right: 1px solid #dfdfe0;
`;


export default MDEditorSkeleton;